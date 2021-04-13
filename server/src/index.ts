import { ApolloServer } from 'apollo-server'
import { createConnection } from 'typeorm'

import { schema } from 'resolvers'
import { current } from 'ormconfig'

export async function bootstrap() {
  const db = await createConnection(current)
  const server = new ApolloServer({ schema })
  const info = await server.listen({ port: process.env.SERVER_PORT || 3000 })

  console.log(`🚀 Server ready at ${info.url}`)

  return { server: info.server, db }
}
