import { Entity, Column } from 'typeorm'
import { Field, ObjectType } from 'type-graphql'

import { CustomEntity } from 'lib/custom_entity'

@ObjectType()
@Entity()
export class Post extends CustomEntity {
  @Field()
  @Column()
  title: string
}
