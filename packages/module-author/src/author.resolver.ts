import {Args, Mutation, Query, Resolver, Subscription, ResolveProperty} from '@nestjs/graphql';
import {PubSub} from 'apollo-server-express';
import {CreateAuthorInput, Author} from './author.type'
import {Inject} from "@nestjs/common";
import {AuthorService} from "./author.service";
import {FieldResolver, Root} from "type-graphql";

const pubSub = new PubSub();

@Resolver(of => Author)
export class AuthorResolver {

  constructor(private readonly service: AuthorService) {
  }

  @Query(returns => [Author])
  async getAuthors(): Promise<Author[]> {
    const authors = await this.service.getAuthors()
    return authors
  }

  @Mutation(returns => Author)
  async createAuthor(@Args('input') args: CreateAuthorInput): Promise<Author> {
    const author = await this.service.createAuthor(args);
    pubSub.publish('createdAuthor', {createdAuthor:author})
    return author
  }

  @Subscription(returns => Author)
  async createdAuthor() {

    return pubSub.asyncIterator('createdAuthor')
  }

  @ResolveProperty()
  async posts(@Root() author: Author) {
    return this.service.findPostsByAuthor(author)
  }

}
