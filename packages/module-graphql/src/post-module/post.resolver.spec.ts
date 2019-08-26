import {Test, TestingModule} from '@nestjs/testing';
import {PostResolver} from './post.resolver';
import {PostService} from './post.service';
import {Post} from "@mono/module-graphql/src/graphql.schema";

describe('PostResolver', () => {
  let resolver: PostResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostResolver, PostService],
    }).compile();

    resolver = module.get<PostResolver>(PostResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('post created', async () => {
    const postCreated = await resolver.create({title: "Post 1"})
    expect(postCreated).toBeDefined()
    expect(postCreated.id).toBeGreaterThan(1)
    expect(postCreated.vote).toEqual(0)

  });

  it('post voted', async () => {
    const postCreated = await resolver.voted({title: "Post 1"})
    expect(postCreated).toBeDefined()
    expect(postCreated.id).toBeGreaterThan(1)
    expect(postCreated.vote).toEqual(0)

  });
});
