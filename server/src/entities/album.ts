import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  BaseEntity
} from 'typeorm'

import { Photo } from './photo'

@Entity()
export class Album extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @ManyToMany(of => Photo, 'albums', { cascade: true })
  @JoinTable()
  photos: Photo[]
}
