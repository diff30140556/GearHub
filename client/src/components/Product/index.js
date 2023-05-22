import "./style.css";
import { ShoppingCartOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Collapse } from "antd";
import laptopImg from '../../images/MSI_Laptop_Transparent.png';
const { Panel } = Collapse;
// import { useState } from "react";

const Products = ({ name, price, quantity, description, isNew, image, specification }) => {
  return (
    <>
      <div className="productPage-section py-5 px-md-5">
        <Row>
          <Col sm={12} lg={7}>
            <h4 className="text-white mb-5 d-flex justify-content-end">
              {name}
            </h4>
            <div className="productPage-img">
              <img src={laptopImg} alt="product" />
            </div>
          </Col>
          <Col sm={12} lg={5}>
            <div className="product-description">
              <div className="productPage-info mb-5">
                <p className="text-white">
                  {description}
                </p>
              </div>
              <div className="productPage-btn  flex-md-row d-flex align-items-center justify-content-center">
                <div className="quantity-btn">
                  <Button className="minus-btn">-</Button>
                  <Button className="primary-btn" type="primary">
                    100
                  </Button>
                  <Button className="plus-btn">+</Button>
                </div>
                <div className="cart-btn-box">
                  <Button
                    className="cart-btn"
                    type="primary"
                    shape="round"
                    icon={<ShoppingCartOutlined className="btn-icon" />}
                    size={"large"}
                  >
                    add to cart
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="product-detail-info px-3 py-5 px-md-5">
        <Collapse accordion className="collapse-form w-sm-100 w-md-75 mx-auto">
          <Panel header="Overview" key="1">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
              non blanditiis adipisci provident animi, voluptatem accusantium
              tenetur vero nesciunt obcaecati numquam, iste at quasi asperiores
              nobis delectus quos vitae distinctio!
            </p>
          </Panel>
          <Panel header="specification" key="2">
            <Table striped className="text-white" responsive>
              <tbody>
                <tr>
                  <td>brand</td>
                  <td>{specification.brand}</td>
                </tr>
                <tr>
                  <td>processor</td>
                  <td>{specification.processor}</td>
                </tr>
                <tr>
                  <td>memory</td>
                  <td>{specification.memory}</td>
                </tr>
                <tr>
                  <td>storage</td>
                  <td>{specification.storage}</td>
                </tr>
              </tbody>
            </Table>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
              eius repellat unde delectus minima consequatur, earum nostrum
              dolorum culpa sit, officiis, repellendus at natus! Odio magni
              eaque corporis quas perspiciatis.
            </p>
          </Panel>
        </Collapse>
      </div>
    </>
  );
};

export default Products;
