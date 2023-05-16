const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    token
    
  }
`;

module.exports = typeDefs;
