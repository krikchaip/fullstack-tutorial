import { Entity, Column } from 'typeorm'

import { CustomEntity } from 'lib/custom_entity'

@Entity()
export class Post extends CustomEntity {
  @Column()
  title: string
}
