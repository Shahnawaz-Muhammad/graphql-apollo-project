import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { typeDefs } from "./schema.js";
import mongoose from "mongoose";
import { JWT_SECRET, MONGO_URI } from "./config.js";
import jwt from "jsonwebtoken";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Database Connected Successfully");
});

mongoose.connection.on("error", (error) => {
  console.log("Database Connection Error", error);
});

import "./models/Quotes.js";
import "./models/User.js";

import { resolvers } from "./resolvers.js";

// const context = ({ req }) => {
//   const { authorization } = req.headers;
//   if (authorization) {
//     const { userId } = jwt.verify(authorization, JWT_SECRET);
//     return { userId };
//   }
// };

const context = ({ req }) => {
  const { authorization } = req.headers;
  console.log("Authorization Header:", authorization); // Add this line for debugging
  if (!authorization) {
    try {
      const { userId } = jwt.verify(authorization, JWT_SECRET);
      console.log("Verified UserId:", userId); // Add this line for debugging
      return { userId };
    } catch (error) {
      console.error("JWT Verification Error:", error); // Add this line for debugging
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log("Server is connected to server ", url);
});
