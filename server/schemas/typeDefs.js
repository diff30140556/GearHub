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
    cart: [Cart]
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
    features: JSON
    comments: [Comment]
  }

  type Category {
    _id: ID
    name: String
    product: [Product]
  }

  type Cart {
    _id: ID
    name: String
    price: Float
    quantity: Int
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
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Checkout {
    session: ID
  }

  type Query {
    me: User
    getCategory(categoryId: ID!): Category
    getAllCategories: [Category]
    findProducts(productId: ID!): Product
    getAllProducts: [Product]
    checkout(products: [ID]!, total_price: String!): Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProducts(productId: ID!): User
    updateProducts(cartId: ID!, quantity: Int!): User
    deleteProducts(cartId: ID!): User
    # checkOut(userId: ID!): Order
    addComment(productId: ID!, comment: String!, categoryId: ID!): Product
    updateComment(productId: ID!, commentId: ID!, comment: String!, categoryId: ID!): Product
    removeComment(productId: ID!, commentId: ID!, categoryId: ID!): Product
  }
`;

module.exports = typeDefs;
