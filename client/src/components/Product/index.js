import React, { useState, useEffect } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { ADD_PRODUCTS } from "../../utils/mutation";
import { Button, InputNumber } from "antd";
import { Row, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Collapse } from "antd";
import Comment from "../Comment/index";
import CommentForm from "../CommentForm/index";
import Aos from 'aos';
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/action";
import { idbPromise } from '../../utils/helpers'
import 'aos/dist/aos.css'
import "./style.css";


const { Panel } = Collapse;

const Products = ({ data }) => {
  useEffect(() => {
    Aos.init();
  }, [])

  const features = Object.entries(data.features)
  const specifications = Object.entries(data.specification)

  const [state, dispatch] = useStoreContext();
  const { cart } = state;

  const [quantity, setQuantity] = useState(1);
  const [addProducts, { error }] = useMutation(ADD_PRODUCTS);

  const handleClick = (e) => {
    const targetName = e.target.name;

    if (quantity === 1 && targetName === "minus") {
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



  const addToCart = async () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === data._id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: data._id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + quantity
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + quantity
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...data, purchaseQuantity: quantity }
      });
      idbPromise('cart', 'put', { ...data, purchaseQuantity: quantity });
    }
  };

  return (
    <>
      <div className="productPage-section py-5 px-md-5">
        <Row>
          <Col sm={12} lg={7} className="mb-5 mb-lg-0">
            <h4 className="product-title text-white mb-5 d-flex justify-content-center fw-bold" data-aos="zoom-out" data-aos-duration="1200" data-aos-once="true">
              {data.name}
            </h4>
            <div className="productPage-img" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" data-aos-once="true">
              <img src={data.image[0]} alt="product" />
            </div>
          </Col>
          <Col sm={12} lg={5}>
            <div className="product-description">
              <div className="productPage-info mb-5">
                <p className="text-white" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000" data-aos-once="true">{data.description}</p>
                <ul className="feature-info">
                  {features.map((feature) => (
                    <li key={feature[0]}>
                      <h5 className="fw-bold" data-aos="zoom-out" data-aos-duration="1400" data-aos-once="true" data-aos-delay="300">{feature[0]}</h5>
                      <p className="text-white" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000" data-aos-once="true">{feature[1]}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="productPage-btn" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <div className="price">
                  <h6>$ {data.price}</h6>
                </div>
                <div className="btn-group flex-md-row d-flex align-items-center justify-content-center">
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
                      min={1}
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
                      onClick={addToCart}
                    >
                      add to cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="product-detail-info px-3 py-5 px-md-5" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <Collapse accordion className="collapse-form w-sm-100 w-md-75 mx-auto">
          <Panel className="text-white" header="Overview" key="1">
            <p>
              {data.description}
            </p>
          </Panel>
          <Panel className="text-white" header="Specification" key="2">
            <Table striped className="text-white" responsive>
              <tbody>
                {specifications.map((specification) => (
                  <tr key={specification[0]}>
                    <td>{specification[0]}</td>
                    <td>{specification[1]}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Panel>
          <Panel className="text-white" header="Features" key="3">
            <p>
              Sorry but we don't have the data for this panel yet..
            </p>
          </Panel>
        </Collapse>
      </div>

      <div className="comment-section px-3 py-5 px-lg-5">
        <Row>
          <Col sm={12} md={7} className="d-flex justify-content-end" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            <Comment comments={data.comments} />
          </Col>
          <Col sm={12} md={5} data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000" data-aos-once="true">
            <CommentForm />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Products;
