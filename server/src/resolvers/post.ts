import { Query, Resolver } from 'type-graphql'

import { Post } from 'entities'

@Resolver()
export class PostResolver {
  @Query(of => [Post])
  async posts() {
    return Post.find()
  }
}
