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
    comments: [Comment]
  }

  type Order {
    savedProducts: [Product]
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
    findProducts(name: String!): [Product]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComment(productId: ID!, comment: String!, userId: ID!): Product
  }
`;
  // addProducts(userId: ID!, productId: ID!): User

module.exports = typeDefs;
