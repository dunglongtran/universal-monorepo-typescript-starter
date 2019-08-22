import {IPost, IAuthor} from "@mono/interfaces";
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {PostEntity} from "./Post";

@Entity({name: "authors"})
export class AuthorEntity implements IAuthor {
  @PrimaryGeneratedColumn("increment")
  id: string
  @Column()
  name: string
  @OneToMany(type => PostEntity, (post: IPost) => post.author)
  posts: PostEntity[]


}
