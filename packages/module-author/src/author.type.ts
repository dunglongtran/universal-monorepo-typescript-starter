import {Author as AuthorModel} from "@mono/models"
import {IAuthor} from "@mono/interfaces";
import {Field, ID, ObjectType, InterfaceType, InputType} from "type-graphql";
import {Post} from '@mono/module-post'

@InterfaceType()
export abstract class AAuthor implements IAuthor {
  @Field(type => ID)
  id: string
  @Field()
  name: string;
}

@ObjectType({implements: AAuthor})
export class Author extends AuthorModel {
  @Field(type => Post)
  posts: Post[]
}

@InputType()
export class CreateAuthorInput extends AuthorModel {
  @Field()
  name: string;
}
