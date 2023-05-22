import "./style.css";
// import { ShoppingCartOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Button, InputNumber } from "antd";
import { Row, Col } from "react-bootstrap";
import Link from "antd/es/typography/Link";
import Pagination from "../../components/Pagination/index";
import React, { useState } from "react";
import "./style.css";

function MyAccountPage() {
  return (
    <main>
      <div className="wrap">
        <h2 className="text-white fs-1 text-center my-5">My Account</h2>
        <Row className="order-info">
          <Col className="order-bg"></Col>
          <Col className="py-4 order-record d-flex flex-column align-items-center justify-content-center">
            <h3 className="text-white fs-3 my-3">Past Orders</h3>
            <ul className="order-record-list mb-3">
              <li className="order-record-item mb-3">
                <Link className="fs-5">45648asd6876sad5a4645</Link>
              </li>
              <li className="order-record-item mb-3">
                <Link className="fs-5">45648asd6876sad5a4645</Link>
              </li>
              <li className="order-record-item mb-3">
                <Link className="fs-5">45648asd6876sad5a4645</Link>
              </li>
              <li className="order-record-item mb-3">
                <Link className="fs-5">45648asd6876sad5a4645</Link>
              </li>
            </ul>
            <Pagination />
          </Col>
        </Row>
      </div>
    </main>
  );
}
export default MyAccountPage;
