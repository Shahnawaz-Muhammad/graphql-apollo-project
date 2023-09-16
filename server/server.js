import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import {typeDefs} from './schema.js'
import mongoose from "mongoose";
import { MONGO_URI } from "./config.js";
import './models/User.js'
import { resolvers } from "./resolvers.js";



mongoose.connect(MONGO_URI, {
  useNewUrlParser:true,
  useUnifiedTopology: true,
})

mongoose.connection.on("connected", () => {
  console.log("Database Connected Successfully")
})

mongoose.connection.on("error", (error) => {
  console.log("Database Connection Error", error)
})


const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log("Server is connected to server ", url);
});
