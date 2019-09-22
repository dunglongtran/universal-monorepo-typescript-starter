import { Author} from "@mono/models";
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import {PostEntity} from "./Post";

@Entity({name: "authors"})
export class AuthorEntity extends Author {
  @PrimaryGeneratedColumn("increment")
  id: string
  @Column()
  name: string
  @OneToMany(type => PostEntity, (post: PostEntity) => post.author)
  posts: PostEntity[]


}
