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

server.listen({ port: 3000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
