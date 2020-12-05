import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  BaseEntity
} from 'typeorm'

import { Photo } from './photo'

@Entity()
export class PhotoMetadata extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('int')
  height: number

  @Column('int')
  width: number

  @Column()
  orientation: string

  @Column()
  compressed: boolean

  @Column()
  comment: string

  @OneToOne(of => Photo, 'metadata', { onDelete: 'CASCADE' })
  @JoinColumn()
  photo: Photo

  // @OneToOne(of => Photo, 'metadata')
  // photo: Photo
}
