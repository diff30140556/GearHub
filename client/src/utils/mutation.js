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
  mutation addProducts($userId: ID!, $productId: ID!) {
    addProducts(userId: $userId, productId: $productId) {
      _id
      cart {
        _id
        name
        price
        quantity
      }
      total_price
    }
  }
`;

export const UPDATE_PRODUCTS = gql`
  mutation updateProducts($userId: ID!, $cartId: ID!, $quantity: Int!){
    updateProducts(userId: $userId, cartId: $cartId, quantity: $quanity){
      _id
      cart {
        _id
        name
        price
        quantity
      }
      total_price
    }
  }
`;

export const DELETE_PRODUCTS = gql`
  mutation deleteProducts($userId: ID!, $cartId: ID!){
    deleteProducts(userId: $userId, cartId: $cartId){
      _id
      cart {
        _id 
        name
        price
        quantity
      }
      total_price
    }
  }
`;

export const CHECKOUT = gql`
  mutation checkOut($userId: ID!){
    checkOut(userId: $userId){
      _id
      total_price
      products {
        _id
        name
        price
        quantity
      }
    }
  }
`;

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
    $userId: ID!
    $categoryId: ID!
  ) {
    addComment(
      productId: $productId
      comment: $comment
      userId: $userId
      categoryId: $categoryId
    ) {
      comments {
        _id
        comment
        user
        product
      }
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment(
    $productId: ID!
    $commentId: ID!
    $userId: ID!
    $comment: String!
    $categoryId: ID!
  ) {
    updateComment(
      productId: $productId
      commentId: $commentId
      userId: $userId
      comment: $comment
      categoryId: $categoryId
    ) {
      comments {
        _id
        comment
        user
        product
      }
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment(
    $productId: ID!
    $commentId: ID!
    $userId: ID!
    $categoryId: ID!
  ) {
    removeComment(
      productId: $productId
      commentId: $commentId
      userId: $userId
      categoryId: $categoryId
    ) {
      comments {
        _id
        comment
        user
        product
      }
    }
  }
`;
