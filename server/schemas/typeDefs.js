const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    comment: [Comment]
    order: [Order]
  }

  type Product {
    _id: ID
    name: String
    price: Float
    quantity: Int
    status: String
    description: String
  }

  type Order {
    savedProducts: [Product]
  }

  type Comment {
    _id: ID
    comment: String
    createAt: String
    userId: ID
    productId: ID
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
    addProducts(userId: ID!, productId: ID!): User
  }
`;

module.exports = typeDefs;
