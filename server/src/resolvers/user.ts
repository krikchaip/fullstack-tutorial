import { Resolver, Arg, FieldResolver } from 'type-graphql'
import { sign } from 'jsonwebtoken'

import {
  User,
  UserAuthenticateInput,
  UserAuthenticateResult,
  UserCreateInput,
  UserUpdateInput
} from 'entities'
import { createResolvers } from 'lib/crud_resolver'

const { QueryResolver, MutationResolver, EntityMutation } = createResolvers({
  Entity: User,
  EntityCreateType: UserCreateInput,
  EntityUpdateType: UserUpdateInput
})

@Resolver()
export class UserQueryResolver extends QueryResolver {}

@Resolver(of => EntityMutation)
export class UserMutationResolver extends MutationResolver {
  @FieldResolver(of => UserAuthenticateResult, { nullable: true })
  async authenticate(
    @Arg('data', of => UserAuthenticateInput) data: UserAuthenticateInput
  ): Promise<UserAuthenticateResult | null> {
    const { username, password } = data
    const user = await User.findOne({ where: { username } })
    if (!user || !user.validatePassword(password)) return null

    const payload = {}
    const token = sign(payload, 'SUPER_SECRET', {
      expiresIn: '7d',
      subject: user.id
    })

    return { token, data: user }
  }
}
