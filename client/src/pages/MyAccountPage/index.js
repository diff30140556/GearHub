import "./style.css";
import { QUERY_USER } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { Row, Col } from "react-bootstrap";
import Link from "antd/es/typography/Link";
import React, { useState } from "react";
import PaginationSet from "../../components/Pagination/index";
import "./style.css";

function MyAccountPage() {
  const { loading, data } = useQuery(QUERY_USER);
  const [currentPage, setCurrentPage] = useState(1);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  const orders = data?.me?.order || [];
  
  const ordersPerPage = 1;
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  return (
    <main>
      <div className="wrap">
        <h2 className="text-white fs-1 text-center my-5">My Account</h2>
        <Row className="order-info">
          <Col className="order-bg"></Col>
          <Col className="py-4 order-record d-flex flex-column align-items-center justify-content-center">
            <h3 className="text-white fs-3 my-3">Past Orders</h3>
            <ul className="order-record-list mb-3">
              {currentOrders.map((order) => (
                <div key={order._id}>
                  <li className="order-record-item mb-3">
                    <Link className="fs-5">{order._id}</Link>
                    <p className="text-white">
                      Total Price: ${order.total_price}
                    </p>
                    <p className="text-white">
                      Purchased At: {order.purchasedAt}
                    </p>
                  </li>
                </div>
              ))}
            </ul>
            <PaginationSet
              current={currentPage}
              onChange={setCurrentPage}
              total={orders.length}
              pageSize={ordersPerPage}
              showQuickJumper={false}
            />
          </Col>
        </Row>
      </div>
    </main>
  );
}
export default MyAccountPage;
