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
        # features
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
      # features
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
    findProducts(id: $productId) {
      _id
      name
      price
      quantity
      description
      isNew
      image
      specification
      # features
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
        # features
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
      _id
      username
      email
      comments {
        _id
        comment
        user
        product
      }
      order {
        _id
        total_price
        products {
          _id
          name
          price
          quantity
          description
          # features
          isNew
          image
          specification
          comments {
            _id
            comment
            user
            product
          }
        }
        purchasedAt
      }
    }
  }
`;