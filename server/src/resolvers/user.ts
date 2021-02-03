import { Resolver } from 'type-graphql'

import { User, UserCreate, UserUpdate } from 'entities'
import { createResolvers } from 'lib/crud_resolver'

const { QueryResolver, MutationResolver } = createResolvers({
  Entity: User,
  EntityCreateType: UserCreate,
  EntityUpdateType: UserUpdate
})

@Resolver()
export class UserQueryResolver extends QueryResolver {}

@Resolver()
export class UserMutationResolver extends MutationResolver {}
