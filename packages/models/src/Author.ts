import {IAuthor} from "@mono/interfaces";
import {Post} from "./Post";

export abstract class Author implements IAuthor {
  id: string;
  name: string;
  posts: Post[];

}
