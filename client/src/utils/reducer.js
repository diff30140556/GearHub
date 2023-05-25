import { useReducer } from "react";
import {
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  DELETE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  ADD_COMMENTS,
  CLEAR_CART,
} from "./action";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.product],
      };

    case ADD_COMMENTS:
      return {
        ...state,
        comments: [...state.comments, action.comment.userComment],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(product => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity
          }
          return product
        })
      };

    case DELETE_FROM_CART:
      let newState = state.cart.filter(product => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cart: newState
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: []
      };
      
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}
