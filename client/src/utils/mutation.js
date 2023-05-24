import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_PRODUCTS = gql`
  mutation addProducts($productId: ID!) {
    addProducts(productId: $productId) {
      _id
      cart {
        _id
        name
        price
        quantity
      }
    }
  }
`;

export const UPDATE_PRODUCTS = gql`
  mutation updateProducts($cartId: ID!, $quantity: Int!){
    updateProducts(cartId: $cartId, quantity: $quanity){
      _id
      cart {
        _id
        name
        price
        quantity
      }
    }
  }
`;

export const DELETE_PRODUCTS = gql`
  mutation deleteProducts($cartId: ID!){
    deleteProducts(cartId: $cartId){
      _id
      cart {
        _id 
        name
        price
        quantity
      }
    }
  }
`;

// export const CHECKOUT = gql`
//   mutation checkOut{
//     checkOut{
//       _id
//       total_price
//       products {
//         _id
//         name
//         price
//         quantity
//       }
//       purchasedAt
//     }
//   }
// `;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment(
    $productId: ID!
    $comment: String!
    $categoryId: ID!
  ) {
    addComment(
      productId: $productId
      comment: $comment
      categoryId: $categoryId
    ) {
      comments {
        _id
        comment
        user
        product
        username
      }
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment(
    $productId: ID!
    $commentId: ID!
    $comment: String!
    $categoryId: ID!
  ) {
    updateComment(
      productId: $productId
      commentId: $commentId
      comment: $comment
      categoryId: $categoryId
    ) {
      comments {
        _id
        comment
        user
        product
        username
      }
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment(
    $productId: ID!
    $commentId: ID!
    $categoryId: ID!
  ) {
    removeComment(
      productId: $productId
      commentId: $commentId
      categoryId: $categoryId
    ) {
      comments {
        _id
        comment
        user
        product
        username
      }
    }
  }
`;
