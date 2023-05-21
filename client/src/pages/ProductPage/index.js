import "./style.css";
// import { ShoppingCartOutlined, AppstoreOutlined } from '@ant-design/icons';
// import { ShoppingCartOutlined, AppstoreOutlined } from "@ant-design/icons";
// import { Button } from "antd";
import { Row, Col } from "react-bootstrap";
// import Table from "react-bootstrap/Table";
// import { Collapse } from "antd";
// import { useState } from "react";
import Comment from "../../components/Comment/index";
import CommentForm from "../../components/CommentForm/index";
// const { Panel } = Collapse;
import Products from '../../components/Product/index'

const data = {
  name: "MSI - Vector 15.6 inch 165hz Gaming Laptop",
  price: 2069.99,
  quantity: 10,
  description:
    "Game like a pro with this MSI Vector GP66 gaming laptop. The Intel Core i7 HX processor and 32GB of RAM run graphic-intensive games smoothly, while the 1TB SSD offers rapid start-ups and ample storage space. This MSI gaming laptop has an NVIDIA GeForce RTX 3070ti graphics card, which produces detailed images on the 15.6-inch QHD 165hz for advanced gameplay..",
  isNew: true,
  image: ["laptop1.jpg"],
  specification: {
    brand: "MSI",
    processor: "Intel Core i7",
    memory: "32GB RAM",
    storage: "1TB SSD",
  },
};

const { name, price, quantity, description, isNew, image } = data;

const specification = data.specification;

function ProductPage() {
  // const [size, setSize] = useState('large'); // default is 'middle'
  return (
    <main>
      <div className="wrap">
        <Products 
            name = {name}
            price = {price}
            quantity = {quantity}
            description = {description}
            isNew = {isNew}
            image = {image}
            specification = {specification}
        />
        <div className="comment-section px-3 py-5 px-lg-5">
          <Row>
            <Col sm={12} md={7} className="d-flex justify-content-end">
              <Comment />
            </Col>
            <Col sm={12} md={5}>
              <CommentForm />
            </Col>
          </Row>
        </div>
      </div>
    </main>
  );
}
export default ProductPage;
