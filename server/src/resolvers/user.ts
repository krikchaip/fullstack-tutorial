import { Resolver, Arg, FieldResolver } from 'type-graphql'
import { Inject, Service } from 'typedi'

import {
  User,
  UserAuthenticateInput,
  UserAuthenticateResult,
  UserCreateInput,
  UserUpdateInput
} from 'entities'
import { Token } from 'services'
import { createResolvers } from 'lib/crud_resolver'

const { QueryResolver, MutationResolver, EntityMutation } = createResolvers({
  Entity: User,
  EntityCreateType: UserCreateInput,
  EntityUpdateType: UserUpdateInput
})

@Resolver()
export class UserQueryResolver extends QueryResolver {}

@Service()
@Resolver(of => EntityMutation)
export class UserMutationResolver extends MutationResolver {
  @Inject()
  $token: Token

  @FieldResolver(of => UserAuthenticateResult, { nullable: true })
  async authenticate(
    @Arg('data', of => UserAuthenticateInput) data: UserAuthenticateInput
  ): Promise<UserAuthenticateResult | null> {
    const { username, password } = data
    const user = await User.findOne({ where: { username } })
    if (!user || !user.validatePassword(password)) return null

    const payload = {}
    const token = this.$token.sign(payload, {
      expiresIn: '7d',
      subject: user.id
    })

    return { token, data: user }
  }
}
