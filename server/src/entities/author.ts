import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity
} from 'typeorm'

import { Photo } from './photo'

@Entity()
export class Author extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @OneToMany(of => Photo, 'author', { cascade: true })
  photos: Photo[]
}
