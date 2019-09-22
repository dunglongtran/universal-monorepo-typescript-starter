import {Post as PostModel} from "@mono/models"
import {IPost} from "@mono/interfaces";
import {Field, ID, ObjectType, InterfaceType, InputType} from "type-graphql";
import {Author} from '@mono/module-author'

@InterfaceType()
export abstract class APost implements IPost {
  @Field(type => ID)
  id: string
  @Field()
  content: string;
  @Field()
  title: string;
}

@ObjectType({implements: APost})
export class Post extends PostModel {
  @Field(type => Author)
  author: Author
}

@InputType()
export class CreatePostInput extends PostModel {
  @Field()
  title: string;
  @Field()
  content: string;
  @Field({nullable: true})
  authorId: string
}
