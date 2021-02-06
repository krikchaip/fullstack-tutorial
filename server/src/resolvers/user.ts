import { Resolver } from 'type-graphql'

import {
  User,
  UserCreateInput,
  UserUpdateInput
} from 'entities'
import { createResolvers } from 'lib/crud_resolver'

const { QueryResolver, MutationResolver } = createResolvers({
  Entity: User,
  EntityCreateType: UserCreateInput,
  EntityUpdateType: UserUpdateInput
})

@Resolver()
export class UserQueryResolver extends QueryResolver {}

@Resolver()
export class UserMutationResolver extends MutationResolver {}
