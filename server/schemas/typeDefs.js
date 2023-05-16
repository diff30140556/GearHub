const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Product {
    _id: ID
    name: String
    price: Float
    quantity: Int
    status: String
    description: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: [User]
    findProducts(name: String!): [Product]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    
  }
`;

module.exports = typeDefs;
