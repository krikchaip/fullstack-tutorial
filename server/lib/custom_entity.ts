import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Field, ID, ObjectType } from 'type-graphql'
import { validateOrReject } from 'class-validator'

@ObjectType({ isAbstract: true })
export abstract class CustomEntity extends BaseEntity {
  @Field(of => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @CreateDateColumn()
  created_at: Date

  @Field()
  @UpdateDateColumn()
  updated_at: Date

  // Validate model before save.
  // ref: https://github.com/typeorm/typeorm/issues/913
  @BeforeInsert()
  @BeforeUpdate()
  async validate() {
    await validateOrReject(this)
  }
}
