import {IPost, IAuthor} from "@mono/interfaces";
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm'
import {AuthorEntity} from "./Author";

@Entity({name: "posts"})
export class PostEntity implements IPost {
  @PrimaryGeneratedColumn("increment")
  id: string;
  @Column()
  content: string;
  @Column()
  title: string;
  @ManyToOne(type => AuthorEntity, (author: IAuthor) => author.posts)
  author: AuthorEntity
}
