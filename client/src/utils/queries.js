import { gql } from "@apollo/client";

export const QUERY_ONE_CATEGORY = gql`
  query getCategory($categoryId: ID) {
    getCategory(categoryId: $categoryId) {
      _id
      name
      product {
        _id
        name
        price
        quantity
        description
        isNew
        image
        specification
        features
        comments {
          _id
          comment
          user
          product
          username
        }
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!, $total_price: String!) {
    checkout(products: $products, total_price: $total_price) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  query getAllProducts{
    getAllProducts{
      _id
      name
      price
      quantity
      description
      isNew
      image
      specification
      features
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

export const QUERY_ONE_PRODUCT = gql`
  query findProducts($productId: ID!) {
    findProducts(productId: $productId) {
      _id
      name
      price
      quantity
      description
      isNew
      image
      specification
      features
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

export const QUERY_ALL_CATEGORIES = gql`
  query getAllCategories{
    getAllCategories {
      _id
      name
      product {
        _id
        name
        price
        quantity
        description
        isNew
        image
        specification
        features
        comments {
          _id
          comment
          user
          product
          username
        }
      }
    }
  }
`;

//this is to query one user and to get all the orders
export const QUERY_USER = gql`
  query me{
    me {
      order {
        _id
        total_price
        products {
          _id
          name
          quantity
          price
        }
        purchasedAt
      }
    }
  }
`;