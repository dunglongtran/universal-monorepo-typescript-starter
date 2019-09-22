import {IPost} from "@mono/interfaces";
import {Author} from "./Author";

export abstract class Post implements IPost {

  id: string;
  title: string;
  content: string;
  author: Author;

}
