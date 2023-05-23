import { ShoppingCartOutlined, AppstoreOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCTS } from "../../utils/mutation";
import { useParams } from "react-router-dom";
import { Button, InputNumber } from "antd";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Collapse } from "antd";
import laptopImg from "../../images/MSI_Laptop_Transparent.png";
import Comment from "../Comment/index";
import CommentForm from "../CommentForm/index";
import React, { useState } from "react";
import "./style.css";
const { Panel } = Collapse;

const Products = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const [addProducts, { error }] = useMutation(ADD_PRODUCTS);
  const { itemId } = useParams();

  const user_id = "646b40b7e085136eb2e65155";

  const handleClick = (e) => {
    const targetName = e.target.name;

    if (quantity === 0 && targetName === "minus") {
      return;
    } else if (targetName === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const handleChange = (value) => {
    setQuantity(value);
  };

  const handleAddCart = async (e) => {
    e.preventDefault();
    try {
      const response = await addProducts(
        { variables: {
          userId: user_id,
          productId: itemId,
        }}
      )
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="productPage-section py-5 px-md-5">
        <Row>
          <Col sm={12} lg={7}>
            <h4 className="text-white mb-5 d-flex justify-content-end">
              {data.name}
            </h4>
            <div className="productPage-img">
              <img src={laptopImg} alt="product" />
            </div>
          </Col>
          <Col sm={12} lg={5}>
            <div className="product-description">
              <div className="productPage-info mb-5">
                <p className="text-white">{data.description}</p>
              </div>
              <div className="productPage-btn  flex-md-row d-flex align-items-center justify-content-center">
                <div className="quantity-btn">
                  <Button
                    className="minus-btn"
                    name="minus"
                    onClick={handleClick}
                  >
                    -
                  </Button>
                  <InputNumber
                    value={quantity}
                    min={0}
                    onChange={handleChange}
                    className="text-center primary-btn"
                  />
                  <Button
                    name="plus"
                    onClick={handleClick}
                    className="plus-btn"
                  >
                    +
                  </Button>
                </div>
                <div className="cart-btn-box">
                  <Button
                    className="cart-btn"
                    type="primary"
                    shape="round"
                    icon={<ShoppingCartOutlined className="btn-icon" />}
                    size={"large"}
                    onClick={handleAddCart}
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
                  <td>Brand</td>
                  <td>{data.specification.Brand}</td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>{data.specification.Color}</td>
                </tr>
                <tr>
                  <td>Memory</td>
                  <td>{data.specification.Memory}</td>
                </tr>
                <tr>
                  <td>Model Number</td>
                  <td>{data.specification["Model Number"]}</td>
                </tr>
                <tr>
                  <td>Operating System</td>
                  <td>{data.specification["Operating System"]}</td>
                </tr>
                <tr>
                  <td>Processor Model</td>
                  <td>{data.specification["Processor Model"]}</td>
                </tr>
                <tr>
                  <td>Processor Speed</td>
                  <td>{data.specification["Processor Speed"]}</td>
                </tr>
                <tr>
                  <td>Screen Resolution</td>
                  <td>{data.specification["Screen Resolution"]}</td>
                </tr>
                <tr>
                  <td>Screen Size</td>
                  <td>{data.specification["Screen Size"]}</td>
                </tr>
                <tr>
                  <td>Solid State Drive Capacity</td>
                  <td>{data.specification["Solid State Drive Capacity"]}</td>
                </tr>
                <tr>
                  <td>Storage Type</td>
                  <td>{data.specification["Storage Type"]}</td>
                </tr>
                <tr>
                  <td>System Memory (RAM)</td>
                  <td>{data.specification["System Memory (RAM)"]}</td>
                </tr>
                <tr>
                  <td>Total Storage Capacity</td>
                  <td>{data.specification["Total Storage Capacity"]}</td>
                </tr>
                <tr>
                  <td>Touch Screen</td>
                  <td>{data.specification["Touch Screen"]}</td>
                </tr>
                <tr>
                  <td>Year of Release</td>
                  <td>{data.specification["Year of Release"]}</td>
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

      <div className="comment-section px-3 py-5 px-lg-5">
        <Row>
          <Col sm={12} md={7} className="d-flex justify-content-end">
            <Comment comments={data.comments} />
          </Col>
          <Col sm={12} md={5}>
            <CommentForm />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Products;
