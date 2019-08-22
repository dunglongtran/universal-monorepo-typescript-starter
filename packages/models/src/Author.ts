import {IAuthor, IPost} from "@mono/interfaces";

export class Author implements IAuthor {
  posts: IPost[]
}
