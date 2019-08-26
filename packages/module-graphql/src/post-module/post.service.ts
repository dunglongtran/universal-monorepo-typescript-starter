import {Injectable} from '@nestjs/common';
import {Post} from '../graphql.schema';

@Injectable()
export class PostService {
  private readonly post: Post[] = [{id: 1, title: 'Post', vote: 5}];

  create(post: Post): Post {
    const item = {...post, vote: 0, id: this.post.length + 1}
    this.post.push(item);
    return item;
  }

  vote(post: Post): Post {
    const item = this.post.find(item => item.id == post.id)
    item.vote += post.vote
    return item;
  }

  findAll(): Post[] {
    return this.post;
  }

  findOneById(id: number): Post {
    return this.post.find(post => post.id === id);
  }
}
