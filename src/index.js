import { createPubSub, createServer } from "@graphql-yoga/node";
import * as fs from "fs";
import db from "./db";
import Query from "./resolvers/Query";

const pubSub = createPubSub();
const resolvers = {
  Query,
};
const server = createServer({
  schema: {
    typeDefs: fs.readFileSync("./src/schema.graphql", "utf-8"),
    resolvers,
  },
  context: { db: db },
  pubSub: pubSub,
});

server.start(() => console.log("Servidor executando..."));
