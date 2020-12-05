import {
  Arg,
  FieldResolver,
  ID,
  Mutation,
  ObjectType,
  Query,
  Resolver
} from 'type-graphql'

import { Post } from 'entities'

@ObjectType()
class PostQuery {}

@ObjectType()
class PostMutation {}

@Resolver(of => PostQuery)
export class PostQueryResolver {
  @Query(of => PostQuery)
  post() {
    return {}
  }

  @FieldResolver(of => Post, { nullable: true })
  info(@Arg('id', of => ID) id: string) {
    return Post.findOne(id)
  }

  @FieldResolver(of => [Post])
  list(): Promise<Post[]> {
    return Post.find()
  }
}

@Resolver(of => PostMutation)
export class PostMutationResolver {
  @Mutation(of => PostMutation)
  post() {
    return {}
  }

  @FieldResolver(of => Post)
  create(@Arg('title') title: string) {
    return Post.create({ title }).save()
  }

  @FieldResolver(of => Post, { nullable: true })
  async update(@Arg('id', of => ID) id: string, @Arg('title') title: string) {
    const post = await Post.findOneOrFail(id)
    Object.assign(post, { title })
    return post.save()
  }

  @FieldResolver(of => Post, { nullable: true })
  async delete(@Arg('id', of => ID) id: string) {
    const post = await Post.findOneOrFail(id)
    return post.remove()
  }
}
