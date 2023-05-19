const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    comments: [Comment]
    order: [Order]
  }

  type Product {
    _id: ID
    name: String
    price: Float
    quantity: Int
    status: String
    description: String
    isNew: Boolean
    InStock: Boolean
    comments: [Comment]
  }

  type Category {
    _id: ID
    product: [Product]
  }

  type Order {
    _id: ID
    total_price: Float
    products: [Product]
    purchasedAt: String
  }

  type Comment {
    _id: ID
    comment: String
    user: ID
    product: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    getCategory(categoryId: ID!): Category
    findProducts(productId: ID!): Product
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProducts(userId: ID!, productId: ID!): Order
    updateProducts(orderId: ID!, productId: ID!, quantity: Int!): Order
    deleteProducts(orderId: ID!): Order
    addComment(productId: ID!, comment: String!, userId: ID!): Product
    updateComment(productId: ID!, commentId: ID!, userId: ID!, comment: String!): Product
    removeComment(productId: ID!, commentId: ID!): Product
  }
`;

module.exports = typeDefs;
