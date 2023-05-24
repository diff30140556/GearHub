import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Nav } from "react-bootstrap";
import Link from "antd/es/typography/Link";
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem/index';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_MULTIPLE_TO_CART } from '../../utils/action';
import './style.css';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  // useEffect(() => {
  //   async function getCart() {
  //     const cart = await idbPromise('cart', 'get');
  //     dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
  //   }

  //   if (!state.cart.length) {
  //     getCart();
  //   }
  // }, [state.cart.length, dispatch]);

  // function toggleCart() {
  //   dispatch({ type: TOGGLE_CART });
  // }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function handleClickDirect() {
    window.location.href = '/login'
  }

  function handleCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds, total_price: calculateTotal() },
    });
  }

  // if (!state.cartOpen) {
  //   return (
  //     <div className="cart-closed" onClick={toggleCart}>
  //       <span role="img" aria-label="trash">
  //         🛒
  //       </span>
  //     </div>
  //   );
  // }

  return (
    // <div className="cart">
    //   <div className="close" onClick={toggleCart}>
    //     [close]
    //   </div>
    //   <h2>Shopping Cart</h2>
    //   {state.cart.length ? (
    //     <div>
    //       {state.cart.map((item) => (
    //         <CartItem key={item._id} item={item} />
    //       ))}

    //       <div className="flex-row space-between">
    //         <strong>Total: ${calculateTotal()}</strong>

    //         {Auth.loggedIn() ? (
    //           <button onClick={submitCheckout}>Checkout</button>
    //         ) : (
    //           <span>(log in to check out)</span>
    //         )}
    //       </div>
    //     </div>
    //   ) : (
    //     <h3>
    //       <span role="img" aria-label="shocked">
    //         😱
    //       </span>
    //       You haven't added anything to your cart yet!
    //     </h3>
    //   )}
    // </div>


    <>
      <Nav.Link onClick={handleShow}>
        Cart
      </Nav.Link>
      <Modal className='cart-modal p-4 p-md-0' show={show} onHide={handleClose} scrollable={true}>
        <Modal.Header closeButton>
          <Modal.Title>My Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {state.cart.length ? (
            <ul className="cartItem-list">
              {state.cart.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}
            </ul>
          ) : (
            <h3>
              You haven't added anything to your cart yet!
            </h3>
          )}
        </Modal.Body>

        <Modal.Footer className='d-flex justify-content-md-end justify-content-center'>
          <p>Total: <span>${calculateTotal()}</span></p>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {Auth.loggedIn() ? (
            <Button variant="primary" onClick={handleCheckout}>
              Purchase
            </Button>
          ) : (
            <Button variant="success" onClick={handleClickDirect}>
            Click to log in
          </Button>
          )}
        </Modal.Footer>

      </Modal>
    </>
  );
};

export default Cart;
