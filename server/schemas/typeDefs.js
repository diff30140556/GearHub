const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar JSON

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
    description: String
    isNew: Boolean
    image: [String]
    specification: JSON
    comments: [Comment]
  }

  type Category {
    _id: ID
    name: String
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
    getAllCategories: [Category]
    findProducts(productId: ID!): Product
    getAllProducts: [Product]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProducts(productId: ID!): Product
    updateProducts(productId: ID!, quantity: Int!): Product
    deleteProducts(productId: ID!): Product
    checkOut: Order
    addComment(productId: ID!, comment: String!, userId: ID!, categoryId: ID!): Product
    updateComment(productId: ID!, commentId: ID!, userId: ID!, comment: String!, categoryId: ID!): Product
    removeComment(productId: ID!, commentId: ID!, userId: ID!, categoryId: ID!): Product
  }
`;

module.exports = typeDefs;
