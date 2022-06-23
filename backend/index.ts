import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { typeDefs } from './schema';
import { resolvers } from './resolver';
import express from 'express';
import cors from 'cors';

export default async function RunServer() {
  const app = express()
  app.use(cors())
  //app.get('/', (req, res) => {
  //  //res.sendFile('index.html', { root: './HTML' })
  //  res.send('<h1>HI</h1>')
  //})

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground]
  })

  await server.start()

  server.applyMiddleware({ app })

  app.listen(3000, () => {
    console.log('😀 start')
  })

}

RunServer()
