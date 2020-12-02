import 'reflect-metadata'

import { ApolloServer, gql } from 'apollo-server'

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

async function bootstrap() {
  const { url } = await server.listen({ port: 3000 })
  console.log(`🚀 Server ready at ${url}`)
}

bootstrap()
