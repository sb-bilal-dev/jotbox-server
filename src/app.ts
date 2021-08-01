import { ApolloServer } from "apollo-server";
import {
  ApolloServerPluginLandingPageGraphQLPlayground
} from "apollo-server-core";

import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import db from './db';
import { config } from 'dotenv';

config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground()
  ]
});

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // were connected!
  console.log("✔️ Connected to MongoDB ✔️");

});

server
  .listen({
    port: process.env.PORT || 4000
  })
  .then(({ url }) => {
    console.log(`Server started at ${url}`);
  });
