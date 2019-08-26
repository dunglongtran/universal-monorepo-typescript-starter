import {Min, Length} from 'class-validator';
import {CreatePostInput} from '../graphql.schema';

export class CreatePostDto extends CreatePostInput {
  @Length(3)
  title: string;
}
