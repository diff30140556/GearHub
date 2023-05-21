import "./style.css";
import { ShoppingCartOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

function LandingPage() {
    const [size, setSize] = useState("large"); // default is 'middle'

    return (
        <main className="landing-main">
            <div className="wrap">
                <div className="product-section">
                    <div className="product-box product-1 d-flex justify-content-center">
                        <Row className="justify-content-center align-items-center flex-column-reverse flex-md-row mx-0">
                            <Col sm={12} md={5}>
                                <div className="product-info">
                                    <h2 className="text-white text-center fs-1">
                                        The Westmire <br />
                                        <span>A56 Headset</span>
                                    </h2>
                                    <div className="product-btn d-flex justify-content-center">
                                        <Button
                                            type="primary"
                                            shape="round"
                                            icon={<ShoppingCartOutlined className="btn-icon" />}
                                            size={size}
                                        >
                                            Buy Now
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
                                <div className="product-img">
                                    <img src="https://i.imgur.com/PhdXXkn.png" alt="laptop" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="product-box product-2 d-flex justify-content-center">
                        <Row className="justify-content-center align-items-center flex-column-reverse flex-md-row mx-0">
                            <Col sm={12} md={5}>
                                <div className="product-info">
                                    <h2 className="text-white text-center fs-1">
                                        The Westmire <br />
                                        <span>A56 Headset</span>
                                    </h2>
                                    <div className="product-btn d-flex justify-content-center">
                                        <Button
                                            type="primary"
                                            shape="round"
                                            icon={<ShoppingCartOutlined className="btn-icon" />}
                                            size={size}
                                        >
                                            Buy Now
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
                                <div className="product-img">
                                    <img src="https://i.imgur.com/NTIF9DD.png" alt="laptop" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="product-box product-3 d-flex justify-content-center">
                        <Row className="justify-content-center align-items-center flex-column-reverse flex-md-row mx-0">
                            <Col sm={12} md={5}>
                                <div className="product-info">
                                    <h2 className="text-white text-center fs-1">
                                        The Westmire <br />
                                        <span>A56 Headset</span>
                                    </h2>
                                    <div className="product-btn d-flex justify-content-center">
                                        <Button
                                            type="primary"
                                            shape="round"
                                            icon={<ShoppingCartOutlined className="btn-icon" />}
                                            size={size}
                                        >
                                            Buy Now
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
                                <div className="product-img">
                                    <img src="https://i.imgur.com/jX4lLhx.png" alt="laptop" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="product-box product-4 d-flex justify-content-center mb-0">
                        <Row className="justify-content-center align-items-center flex-column-reverse flex-md-row mx-0">
                            <Col sm={12} md={5}>
                                <div className="product-info">
                                    <h2 className="text-white text-center fs-1">
                                        The Westmire <br />
                                        <span>A56 Headset</span>
                                    </h2>
                                    <div className="product-btn d-flex justify-content-center">
                                        <Button
                                            type="primary"
                                            shape="round"
                                            icon={<ShoppingCartOutlined className="btn-icon" />}
                                            size={size}
                                        >
                                            Buy Now
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
                                <div className="product-img">
                                    <img src="https://i.imgur.com/3ICVUYL.png" alt="laptop" />
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
