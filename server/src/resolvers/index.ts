import { buildSchemaSync } from 'type-graphql'

export const schema = buildSchemaSync({
  resolvers: ['src/resolvers/!(index).ts']
})
