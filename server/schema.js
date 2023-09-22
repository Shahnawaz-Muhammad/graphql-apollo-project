import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    quotes: [Quote]
  }

  type Quote {
    quote: String!
    postedBy: ID!
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    acceptTerms: Boolean!
  }

  input UserLoginInput {
    email: String!
    password: String!
  }

  type Token {
    token: String!
  }

  type Mutation {
    signupUser(newUser: UserInput!): User
    loginUser(userLogin: UserLoginInput!): Token
    createQuote(quote: String!): String
  }

  type Query {
    users: [User]
    quotes: [QuoteWithName]
    user(_id: ID!): User
    iquote(postedBy: ID!):[Quote]
    profile: User

  }

  type QuoteWithName {
    quote: String!
    postedBy: NameAsId
  }

  type NameAsId {
    _id: String
    firstName: String
  }
`;
