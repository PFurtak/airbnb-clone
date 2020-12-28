import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql';

const app = express();
const PORT = 5000;

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: '/api' });

app.listen(PORT, () => {
  console.log(
    `[server.ts]: Express server listening on http://localhost:${PORT}...`
  );
});
