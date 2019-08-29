import {Args, Mutation, Query, Resolver, Subscription,ResolveProperty} from '@nestjs/graphql';
import {PubSub} from 'apollo-server-express';
import {CreateAuthorInput, Author} from './author.type'
import {Inject} from "@nestjs/common";
import {AuthorService} from "./author.service";
import {FieldResolver, Root} from "type-graphql";

const pubSub = new PubSub();

@Resolver(of => Author)
export class AuthorResolver {

  constructor(private readonly service: AuthorService){}

  @Query(returns => [Author])
  async getAuthors(): Promise<Author[]> {

    return this.service.getAuthors()
  }

  @Mutation(returns => Author)
  async createAuthor(@Args('input') args: CreateAuthorInput): Promise<Author> {

    return this.service.createAuthor(args)
  }
  @ResolveProperty()
  async posts(@Root() author:Author){
    return this.service.findPostsByAuthor(author)
  }

}
