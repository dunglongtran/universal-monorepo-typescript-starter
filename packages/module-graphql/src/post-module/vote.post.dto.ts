import {Max, Min,} from 'class-validator';
import {VotePostInput} from '../graphql.schema';

export class VotePostDto extends VotePostInput {
  @Min(1)
  @Max(5)
  vote: number;

}
