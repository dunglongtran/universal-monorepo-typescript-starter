import {IPost} from "./IPost";

export interface IAuthor {
  id: string
  name: string
  posts:IPost[]
}
