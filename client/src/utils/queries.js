import { gql } from "@apollo/client";
//Please ensure that the query-names "products" etc. we using here is same as tyepdef and resolver.

//It should return products of selected category.
export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      price
      quantity
      description
      isNew
      InStock
      comment {
        _id
      }
    }
  }
`;

// comment will not be included in this query as when we show all the products. We may not want to show comments for each product.
export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      price
      quantity
      description
      isNew
      InStock
    }
  }
`;

//query one product
export const QUERY_ONE_PRODUCT = gql`
  query getOneProduct($productId: ID!) {
    product(id: $productId) {
      _id
      name
      price
      quantity
      description
      isNew
      InStock
    }
  }
`;

export const QUERY_ALL_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;
//this is to query one user and to get all the orders
export const QUERY_USER = gql`
  {
    user {
      username
      orders {
        _id
        purchasedAt
        total_price
        products {
          _id
          name
          price
        }
      }
    }
  }
`;
