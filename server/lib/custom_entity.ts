import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { validateOrReject } from 'class-validator'

export abstract class CustomEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @CreateDateColumn()
  created_at: Date

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
