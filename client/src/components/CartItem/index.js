import React, { useState } from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { DELETE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/action";
import { idbPromise } from "../../utils/helpers";
import { InputNumber } from 'antd';
import Link from "antd/es/typography/Link";
import { Row, Col } from 'react-bootstrap';

const CartItem = ({ item }) => {
  const [cartQuantity, setCartQuantity] = useState(item.purchaseQuantity);

  const handleChange = (value) => {
    setCartQuantity(value)

    if (value === 0) {
      dispatch({
        type: DELETE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  const [, dispatch] = useStoreContext();

  const handleClickDelItem = (e, item) => {
    e.preventDefault();

    dispatch({
      type: DELETE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  return (
    <li className="single-item mb-5">
      <Row>
        <Col sm={6} md={4} className='mx-auto'>
          <div className="cartItem-pic">
            <img src={item.image[0]} alt="item-pic" />
          </div>
        </Col>
        <Col sm={12} md={8} className='mt-4 mt-md-0'>
          <div className="cartItem-info">
            <p className='text-center text-md-start'>{item.name} $<span className='fw-bold'>{item.price}</span></p>
            <div className="cartItem-input d-flex align-items-center justify-content-center justify-content-md-start">
              <InputNumber value={item.purchaseQuantity} min={0} onChange={handleChange} />
              <Link href="#" className='ms-4' onClick={(e) => handleClickDelItem(e, item)}>Remove Item</Link>
            </div>
          </div>
        </Col>
      </Row>
    </li>

  );
}

export default CartItem;
