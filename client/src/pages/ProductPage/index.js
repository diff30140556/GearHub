import "./style.css";
// import { ShoppingCartOutlined, AppstoreOutlined } from '@ant-design/icons';
import { ShoppingCartOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

function ProductPage() {
  // const [size, setSize] = useState('large'); // default is 'middle'
  return (
    <main>
      <div className="wrap">
        <div className="product-section">
          <Row>
            <Col>
              <div className="productPage-img">
                <img src="https://i.imgur.com/3ICVUYL.png" alt="product" />
              </div>
            </Col>
            <Col>
              <div className="product-description">
                <div className="productPage-info mb-5">
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto sapiente porro aut quia dolore, fuga, similique
                    labore sed obcaecati illo explicabo ad quod rerum doloribus
                    optio quasi repellat eaque nostrum nam! Facilis adipisci
                    saepe quas voluptatibus dignissimos quod voluptatem, est
                    distinctio, ducimus pariatur, perspiciatis blanditiis
                    nesciunt iusto delectus temporibus beatae.
                  </p>
                </div>
                <div className="productPage-btn">
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
      </div>
    </main>
  );
}
export default ProductPage;
