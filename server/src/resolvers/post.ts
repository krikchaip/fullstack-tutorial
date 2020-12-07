// TypeORM Entity#findOne returns unexpected value
// ref: https://stackoverflow.com/questions/53455552

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

@ObjectType()
class PostQuery {}

@ObjectType()
class PostMutation {}

@Resolver(of => PostQuery)
export class PostQueryResolver {
  @Query(of => PostQuery)
  post(@Arg('id', of => ID, { nullable: true }) id?: string) {
    return { id }
  }

  @FieldResolver(of => Post, { nullable: true })
  info(@Root('id') id?: string) {
    return Post.findOne({ where: { id } })
  }

  @FieldResolver(of => [Post])
  async list(@Root('id') id?: string): Promise<Post[]> {
    const post = await Post.findOne({ where: { id } })
    return post ? [post] : Post.find()
  }
}

@Resolver(of => PostMutation)
export class PostMutationResolver {
  @Mutation(of => PostMutation)
  post(@Arg('id', of => ID, { nullable: true }) id?: string) {
    return { id }
  }

  @FieldResolver(of => Post)
  create(@Arg('title') title: string) {
    return Post.create({ title }).save()
  }

  @FieldResolver(of => Post, { nullable: true })
  async update(@Arg('title') title: string, @Root('id') id?: string) {
    const post = await Post.findOne({ where: { id } })
    return post ? Object.assign(post, { title }).save() : null
  }

  @FieldResolver(of => Post, { nullable: true })
  async delete(@Root('id') id?: string) {
    const post = await Post.findOne({ where: { id } })
    return post ? post.remove() : null
  }
}
