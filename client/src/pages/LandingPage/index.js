import React, { useState, useEffect } from "react";
import { ShoppingCartOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Aos from "aos";
import "./style.css";
import "aos/dist/aos.css";

function LandingPage() {
  const [size, setSize] = useState("large");
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main className="landing-main">
      <div className="wrap">
        <div className="product-section">
          <div className="product-box product-1 d-flex justify-content-center">
            <Row className="justify-content-center align-items-center flex-column-reverse flex-md-row mx-0">
              <Col sm={12} md={5}>
                <div
                  className="product-info"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <h2 className="text-white text-center">
                    Alienware M17
                    <br />
                    <span> Gaming Laptop</span>
                  </h2>
                  <div className="product-btn d-flex justify-content-center">
                    <Button
                      type="primary"
                      shape="round"
                      icon={<ShoppingCartOutlined className="btn-icon" />}
                      size={size}
                    >
                      <Link
                        className="linkBtn"
                        to="/product/646f7f0848021ba563a50271/646f7f0848021ba563a50286"
                      >
                        Buy Now
                      </Link>
                    </Button>
                    <Button
                      type="primary"
                      shape="round"
                      icon={<AppstoreOutlined className="btn-icon" />}
                      size={size}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={7}>
                <div
                  className="product-img"
                  data-aos-once="true"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  <img src="https://i.imgur.com/epcKq1S.png" alt="laptop" />
                </div>
              </Col>
            </Row>
          </div>
          <div className="product-box product-2 d-flex justify-content-center">
            <Row className="justify-content-center align-items-center flex-column-reverse flex-md-row mx-0">
              <Col sm={12} md={5}>
                <div
                  className="product-info"
                  data-aos-offset="120"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <h2 className="text-white text-center fs-1">
                    Logitech G733 <br />
                    <span>DTS Headset</span>
                  </h2>
                  <div className="product-btn d-flex justify-content-center">
                    <Button
                      type="primary"
                      shape="round"
                      icon={<ShoppingCartOutlined className="btn-icon" />}
                      size={size}
                    >
                      <Link
                        className="linkBtn"
                        to="/product/646f7f0848021ba563a50272/646f7f0848021ba563a5028b"
                      >
                        Buy Now
                      </Link>
                    </Button>
                    <Button
                      type="primary"
                      shape="round"
                      icon={<AppstoreOutlined className="btn-icon" />}
                      size={size}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={7}>
                <div
                  className="product-img"
                  data-aos-once="true"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  <img src="https://i.imgur.com/65vh6pQ.png" alt="headset" />
                </div>
              </Col>
            </Row>
          </div>
          <div className="product-box product-3 d-flex justify-content-center">
            <Row className="justify-content-center align-items-center flex-column-reverse flex-md-row mx-0">
              <Col sm={12} md={5}>
                <div
                  className="product-info"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <h2 className="text-white text-center fs-1">
                    NVIDIA
                    <br />
                    <span>GeForce RTX 4090</span>
                  </h2>
                  <div className="product-btn d-flex justify-content-center">
                    <Button
                      type="primary"
                      shape="round"
                      icon={<ShoppingCartOutlined className="btn-icon" />}
                      size={size}
                    >
                      <Link
                        className="linkBtn"
                        to="/product/646f7f0848021ba563a50279/646f7f0848021ba563a50290"
                      >
                        Buy Now
                      </Link>
                    </Button>
                    <Button
                      type="primary"
                      shape="round"
                      icon={<AppstoreOutlined className="btn-icon" />}
                      size={size}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={7}>
                <div
                  className="product-img"
                  data-aos-once="true"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  <img
                    src="https://i.imgur.com/pzPp5ws.png"
                    alt="graphics card"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="product-box product-4 d-flex justify-content-center mb-0">
            <Row className="justify-content-center align-items-center flex-column-reverse flex-md-row mx-0">
              <Col sm={12} md={5}>
                <div
                  className="product-info"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <h2 className="text-white text-center fs-1">
                    MSI GE76 Raider <br />
                    <span>Gaming Laptop</span>
                  </h2>
                  <div className="product-btn d-flex justify-content-center">
                    <Button
                      type="primary"
                      shape="round"
                      icon={<ShoppingCartOutlined className="btn-icon" />}
                      size={size}
                    >
                      <Link
                        className="linkBtn"
                        to="/product/646f7f0848021ba563a5026f/646f7f0848021ba563a50286"
                      >
                        Buy Now
                      </Link>
                    </Button>
                    <Button
                      type="primary"
                      shape="round"
                      icon={<AppstoreOutlined className="btn-icon" />}
                      size={size}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={7}>
                <div
                  className="product-img"
                  data-aos-once="true"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  <img src="https://i.imgur.com/P4ZCnvY.png" alt="laptop" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </main>
  );
}
export default LandingPage;
