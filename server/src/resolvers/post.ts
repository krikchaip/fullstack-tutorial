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

import { Post } from 'entities'
import { MutationResolver, QueryResolver } from 'lib/crud_resolver'

@ObjectType()
class PostQuery {}

@ObjectType()
class PostMutation {}

@Resolver(of => PostQuery)
export class PostQueryResolver extends QueryResolver(PostQuery, Post) {}

@Resolver(of => PostMutation)
export class PostMutationResolver extends MutationResolver(
  PostMutation,
  Post
) {}
