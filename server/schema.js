import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
    quotes: [Quote]
  }

  type Quote {
    postedBy: ID
    quote: String
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input UserLoginInput {
    email: String!
    password: String!
  }

  type Token {
    token: String
  }

  type Mutation {
    signupUser(newUser: UserInput!): User
    loginUser(userLogin: UserLoginInput!): Token
  }

  type Query {
    users: [User]
    quotes: [Quote]
    user(_id: ID!): User
  }
`;
