import {
  Arg,
  FieldResolver,
  ID,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root
} from 'type-graphql'

import { Post, PostCreate, PostUpdate } from 'entities'
import { createResolvers } from 'lib/crud_resolver'

const { QueryResolver, MutationResolver } = createResolvers({
  Entity: Post,
  EntityCreateType: PostCreate,
  EntityUpdateType: PostUpdate
})

@Resolver()
export class PostQueryResolver extends QueryResolver {}

@Resolver()
export class PostMutationResolver extends MutationResolver {}
