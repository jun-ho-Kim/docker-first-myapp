import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { typeDefs } from './schema';
import { resolvers } from './resolver';
import * as express from 'express';

export default async function RunServer() {
  const app = express()

  app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './HTML' })
  })

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground]
  })

  await server.start()

  server.applyMiddleware({ app })

  app.listen(5000, () => {
    console.log('😀 start')
  })

}

RunServer()
