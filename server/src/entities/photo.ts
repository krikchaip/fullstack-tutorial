import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  JoinTable
} from 'typeorm'

import { PhotoMetadata } from './photo_metadata'
import { Author } from './author'
import { Album } from './album'

@Entity()
export class Photo extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 100 })
  name: string

  @Column('text')
  description: string

  @Column()
  filename: string

  @Column('int', { default: 0 })
  views: number

  @Column()
  is_published: boolean

  @OneToOne(of => PhotoMetadata, 'photo', { cascade: true })
  metadata: PhotoMetadata

  // @OneToOne(of => PhotoMetadata, 'photo', { cascade: true })
  // @JoinColumn()
  // metadata: PhotoMetadata

  @ManyToOne(of => Author, 'photos', { onDelete: 'CASCADE' })
  @JoinColumn()
  author: Author

  @ManyToMany(of => Album, 'photos')
  albums: Album[]
}
