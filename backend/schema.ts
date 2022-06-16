import {gql} from 'apollo-server-express'


export const typeDefs = gql`
type MovieDataType {
  id: Int!
  text: String!
}

type Query {
  visitorBooks: [MovieDataType]
  visitorBook(id: Int): MovieDataType
}

type Mutation {
  createVisitorBook(text: String): MovieDataType
}
`