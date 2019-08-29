import {Post} from '@mono/models';
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {AuthorEntity} from "./Author";

@Entity({name: "posts"})
export class PostEntity extends Post {
  @PrimaryGeneratedColumn("increment")
  id: string;
  @Column()
  content: string;
  @Column()
  title: string;
  @ManyToOne(type => AuthorEntity, (author: AuthorEntity) => author.posts)
  author: AuthorEntity
}
