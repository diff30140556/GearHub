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
      products {
        _id
        name
        price
        quantity
      }
      total_price
      purchasedAt
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
