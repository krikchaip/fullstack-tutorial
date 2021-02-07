import { buildSchemaSync } from 'type-graphql'
import { Container } from 'typedi'

export const schema = buildSchemaSync({
  resolvers: ['src/resolvers/!(index).ts'],
  container: Container
})
