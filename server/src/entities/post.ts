import { Entity, Column } from 'typeorm'
import { Field, InputType, ObjectType } from 'type-graphql'
import { MinLength } from 'class-validator'

import { CustomEntity } from 'lib/custom_entity'

@ObjectType('Post')
@InputType('PostInput')
@Entity()
export class Post extends CustomEntity {
  @Field()
  @Column()
  @MinLength(5, { message: 'Minimum length of 5!' })
  title: string
}
