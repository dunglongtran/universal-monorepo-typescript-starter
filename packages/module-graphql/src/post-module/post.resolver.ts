import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import {Post} from '../graphql.schema';
import { PostGuard } from './post.guard';
import { PostService } from './post.service';
import { CreatePostDto } from './create.post.dto';
import {  VotePostDto } from './vote.post.dto';


const pubSub = new PubSub();

@Resolver('Post')
export class PostResolvers {
  constructor(private readonly postService: PostService) {}

  @Query('getPosts')
  @UseGuards(PostGuard)
  async getPosts() {
    return await this.postService.findAll();
  }

  @Query('post')
  async findOneById(
    @Args('id', ParseIntPipe)
      id: number,
  ): Promise<Post> {
    return await this.postService.findOneById(id);
  }

  @Mutation('createPost')
  async create(@Args('createPostInput') args: CreatePostDto): Promise<Post> {
    const createdPost = await this.postService.create(args);
    pubSub.publish('postCreated', { postCreated: createdPost });
    return createdPost;
  }
  @Mutation('votePost')
  async vote(@Args('votePostInput') args: VotePostDto): Promise<Post> {
    const votedPost = await this.postService.vote(args);
    pubSub.publish('postVoted', { postVoted: votedPost });
    return votedPost;
  }

  @Subscription('postCreated')
  postCreated() {
    return pubSub.asyncIterator('postCreated');
  }
  @Subscription('postVoted')
  postVoted() {
    return pubSub.asyncIterator('postVoted');
  }
}
