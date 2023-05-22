import React, { useState } from 'react';
// import { useStoreContext } from "../../utils/GlobalState";
// import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
// import { idbPromise } from "../../utils/helpers";
import { InputNumber } from 'antd';
import Link from "antd/es/typography/Link";
import { Row, Col } from 'react-bootstrap';

const CartItem = ({ item }) => {
  const [cartQuantity, setCartQuantity] = useState(1);

  const handleChange = (value) => {
    setCartQuantity(value)
  }

  //   const [, dispatch] = useStoreContext();

  //   const removeFromCart = item => {
  //     dispatch({
  //       type: REMOVE_FROM_CART,
  //       _id: item._id
  //     });
  //     idbPromise('cart', 'delete', { ...item });

  //   };

  //   const onChange = (e) => {
  //     const value = e.target.value;
  //     if (value === '0') {
  //       dispatch({
  //         type: REMOVE_FROM_CART,
  //         _id: item._id
  //       });
  //       idbPromise('cart', 'delete', { ...item });

  //     } else {
  //       dispatch({
  //         type: UPDATE_CART_QUANTITY,
  //         _id: item._id,
  //         purchaseQuantity: parseInt(value)
  //       });
  //       idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

  //     }
  //   }

  return (
    // <div className="flex-row">
    //   <div>
    //     <img
    //       src={`/images/${item.image}`}
    //       alt=""
    //     />
    //   </div>
    //   <div>
    //     <div>{item.name}, ${item.price}</div>
    //     <div>
    //       <span>Qty:</span>
    //       <input
    //         type="number"
    //         placeholder="1"
    //         value={item.purchaseQuantity}
    //         onChange={onChange}
    //       />
    //       <span
    //         role="img"
    //         aria-label="trash"
    //         onClick={() => removeFromCart(item)}
    //       >
    //         🗑️
    //       </span>
    //     </div>
    //   </div>
    // </div>
    <ul className="cartItem-list">
      <li className="single-item mb-5">
        <Row>
          <Col sm={6} md={4} className='mx-auto'>
            <div className="cartItem-pic">
              <img src="https://i.imgur.com/3ICVUYL.png" alt="" />
            </div>
          </Col>
          <Col sm={12} md={8} className='mt-4 mt-md-0'>
            <div className="cartItem-info">
              <p className='text-center text-md-start'>Laptop name is so longgggg so many, $<span className='fw-bold'>2999</span></p>
              <div className="cartItem-input d-flex align-items-center justify-content-center justify-content-md-start">
                <InputNumber value={cartQuantity} min={0} onChange={handleChange} />
                <Link href="" className='ms-4'>Remove Item</Link>
              </div>
            </div>
          </Col>
        </Row>
      </li>
      <li className="single-item mb-5">
        <Row>
          <Col sm={6} md={4} className='mx-auto'>
            <div className="cartItem-pic">
              <img src="https://i.imgur.com/3ICVUYL.png" alt="" />
            </div>
          </Col>
          <Col sm={12} md={8} className='mt-4 mt-md-0'>
            <div className="cartItem-info">
              <p className='text-center text-md-start'>Laptop name is so longgggg so many, $<span className='fw-bold'>2999</span></p>
              <div className="cartItem-input d-flex align-items-center justify-content-center justify-content-md-start">
                <InputNumber value={cartQuantity} min={0} onChange={handleChange} />
                <Link href="" className='ms-4'>Remove Item</Link>
              </div>
            </div>
          </Col>
        </Row>
      </li>
      <li className="single-item mb-5">
        <Row>
          <Col sm={6} md={4} className='mx-auto'>
            <div className="cartItem-pic">
              <img className='' src="https://i.imgur.com/3ICVUYL.png" alt="" />
            </div>
          </Col>
          <Col sm={12} md={8} className='mt-4 mt-md-0'>
            <div className="cartItem-info">
              <p className='text-center text-md-start'>Laptop name is so longgggg so many, $<span className='fw-bold'>2999</span></p>
              <div className="cartItem-input d-flex align-items-center justify-content-center justify-content-md-start">
                <InputNumber value={cartQuantity} min={0} onChange={handleChange} />
                <Link href="" className='ms-4'>Remove Item</Link>
              </div>
            </div>
          </Col>
        </Row>
      </li>
      <li className="single-item mb-5">
        <Row>
          <Col sm={6} md={4} className='mx-auto'>
            <div className="cartItem-pic">
              <img src="https://i.imgur.com/3ICVUYL.png" alt="" />
            </div>
          </Col>
          <Col sm={12} md={8} className='mt-4 mt-md-0'>
            <div className="cartItem-info">
              <p className='text-center text-md-start'>Laptop name is so longgggg so many, $<span className='fw-bold'>2999</span></p>
              <div className="cartItem-input d-flex align-items-center justify-content-center justify-content-md-start">
                <InputNumber value={cartQuantity} min={0} onChange={handleChange} />
                <Link href="" className='ms-4'>Remove Item</Link>
              </div>
            </div>
          </Col>
        </Row>
      </li>
    </ul>

  );
}

export default CartItem;
