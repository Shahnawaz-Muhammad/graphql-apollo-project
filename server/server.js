import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import {users, quotes} from './dummyData.js'

const typeDefs = gql`
  type Query {
    users: [User]
    quotes: [Quote]
  }

  type User {
    id:ID
    name: String
    email: String
    quotes: [Quote]
  }

  type Quote {
    postedBy: ID
    quote: String
  }
`;

const resolvers = {
  Query: {
    users: () => users,
    quotes: () => quotes
  },
  User: {
    quotes: (user)=> quotes.filter(quotes => quotes.postedBy === user.id)
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log("Server is connected to server ", url);
});
