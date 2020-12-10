// TypeORM Entity#findOne returns unexpected value
// ref: https://stackoverflow.com/questions/53455552

import {
  Arg,
  ClassType,
  FieldResolver,
  ID,
  Mutation,
  Query,
  Resolver,
  Root
} from 'type-graphql'
import { BaseEntity } from 'typeorm'

export function QueryResolver<T extends ClassType, E extends typeof BaseEntity>(
  Type: T,
  Entity: E
) {
  @Resolver(of => Type, { isAbstract: true })
  abstract class QueryResolver {
    @Query(of => Type)
    [Entity.name.toLowerCase()](
      @Arg('id', of => ID, { nullable: true }) id?: string
    ) {
      return { id }
    }

    @FieldResolver(of => Entity, { nullable: true })
    async info(@Root('id') id?: string) {
      return (await Entity.findOne({ where: { id } })) || null
    }

    @FieldResolver(of => [Entity])
    async list(@Root('id') id?: string) {
      const item = await Entity.findOne({ where: { id } })
      return item ? [item] : Entity.find()
    }
  }

  return QueryResolver
}

export function MutationResolver<
  T extends ClassType,
  E extends typeof BaseEntity
>(Type: T, Entity: E) {
  @Resolver(of => Type, { isAbstract: true })
  abstract class MutationResolver {
    @Mutation(of => Type)
    [Entity.name.toLowerCase()](
      @Arg('id', of => ID, { nullable: true }) id?: string
    ) {
      return { id }
    }

    @FieldResolver(of => Entity)
    create(@Arg('data', of => Entity) data: E) {
      return Entity.create(data).save()
    }

    @FieldResolver(of => Entity, { nullable: true })
    async update(@Arg('data', of => Entity) data: E, @Root('id') id?: string) {
      const item = await Entity.findOne({ where: { id } })
      return item ? Object.assign(item, data).save() : null
    }

    @FieldResolver(of => Entity, { nullable: true })
    async delete(@Root('id') id?: string) {
      const item = await Entity.findOne({ where: { id } })
      return item ? item.remove() : null
    }
  }

  return MutationResolver
}
