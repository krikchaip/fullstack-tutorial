import { Resolver } from 'type-graphql'

import { Post, PostCreateInput, PostUpdateInput } from 'entities'
import { createResolvers } from 'lib/crud_resolver'

const { QueryResolver, MutationResolver } = createResolvers({
  Entity: Post,
  EntityCreateType: PostCreateInput,
  EntityUpdateType: PostUpdateInput
})

@Resolver()
export class PostQueryResolver extends QueryResolver {}

@Resolver()
export class PostMutationResolver extends MutationResolver {}
