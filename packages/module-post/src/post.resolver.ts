import {Args, Mutation, Query, Resolver, Subscription,ResolveProperty} from '@nestjs/graphql';
import {PubSub} from 'apollo-server-express';
import {CreatePostInput, Post} from './post.type'
import {Inject} from "@nestjs/common";
import {PostService} from "./post.service";
import {FieldResolver, Root} from "type-graphql";
import {Author} from "@mono/module-author";

const pubSub = new PubSub();

@Resolver(of => Post)
export class PostResolver {

  constructor(private readonly service: PostService) {
  }

  @Query(returns => [Post])
  async getPosts(): Promise<Post[]> {
    console.log(this.service.getPosts)
    const posts = await this.service.getPosts()
    return posts
  }

  @Mutation(returns => Post)
  async createPost(@Args('input') args: CreatePostInput): Promise<Post> {

    return this.service.createPost(args)
  }

  @ResolveProperty()
  author(@Root() post: Post) {
    return this.service.findAuthorByPost(post)
  }

}
