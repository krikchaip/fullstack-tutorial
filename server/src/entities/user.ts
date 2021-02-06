import { Column, Entity, BeforeInsert, BeforeUpdate } from 'typeorm'
import { Field, InputType, ObjectType } from 'type-graphql'
import { IsNotEmpty, MinLength } from 'class-validator'
import { hashSync } from 'bcrypt'

import { CustomEntity } from 'lib/custom_entity'
import { NotExistsIn } from 'lib/validators'

@ObjectType()
@Entity()
export class User extends CustomEntity {
  @Field()
  @Column({ unique: true })
  @NotExistsIn(User)
  @IsNotEmpty({ message: 'Should not be empty!' })
  username: string

  @Column()
  @MinLength(3, { message: 'Minimum length of 3!' })
  password: string

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = hashSync(this.password, 10)
  }
}

@InputType()
export class UserCreate implements Partial<User> {
  @Field()
  username: string

  @Field()
  password: string
}

@InputType()
export class UserUpdate implements Partial<User> {
  @Field({ nullable: true })
  password?: string
}
