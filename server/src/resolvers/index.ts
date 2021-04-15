import { buildSchemaSync } from 'type-graphql'
import { Container } from 'typedi'

import { EXT } from 'env'

export const schema = buildSchemaSync({
  resolvers: [`src/resolvers/!(index).${EXT}`],
  container: Container
})
