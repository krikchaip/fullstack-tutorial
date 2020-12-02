import { ApolloServer, gql } from 'apollo-server'
import { createConnection } from 'typeorm'

import { ormconfig } from '../ormconfig'

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      books: [Book]
    }

    type Book {
      title: String
      author: String
    }
  `,
  resolvers: {
    Query: {
      books: () => [
        {
          title: 'The Awakening',
          author: 'Kate Chopin'
        },
        {
          title: 'City of Glass',
          author: 'Paul Auster'
        }
      ]
    }
  }
})

export default async function bootstrap() {
  const db = await createConnection(ormconfig.default)
  const info = await server.listen({ port: 3000 })

  console.log(`🚀 Server ready at ${info.url}`)

  return { server: info.server, db }
}
