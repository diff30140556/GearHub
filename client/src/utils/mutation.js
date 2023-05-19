import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchasedAt
      products {
        _id
        name
        price
        isNew
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
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment(
    $comment: String!
    $userId: String!
    $productId: String!
  ) {
    addComment(productId: $productId, comment: $comment, userId: $userId) {
      comments {
        comment
      }
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment(
    $productId: String!
    $commentId: String!
    $userId: String!
    $comment: String!
  ) {
    updateComment(
      productId: $productId
      commentId: $commentId
      userId: $userId
      comment: $comment
    ) {
      comments {
        comment
      }
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($productId: String!, $commentId: String!) {
    removeComment(productId: $productId, commentId: $commentId) {
      comments
    }
  }
`;
