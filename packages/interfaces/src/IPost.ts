import {IAuthor} from "./IAuthor";

export interface IPost {
  id: string
  title: string
  content: string
  author:IAuthor
}
