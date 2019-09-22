import {Test, TestingModule} from '@nestjs/testing';
import {PostResolver} from './post.resolver';
import {PostService} from './post.service';

describe('PostResolver', () => {
  let resolver: PostResolver;
  let service: PostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostResolver, PostService],
    }).compile();

    resolver = module.get<PostResolver>(PostResolver);
    service = module.get<PostService>(PostService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('post created', async () => {
    const title = "Post 1"
    const postCreated = await resolver.create({title})
    expect(postCreated).toBeDefined()
    expect(postCreated.title).toEqual(title)


  });

  it('post voted', async () => {
    const vote = service.findOneById(1).vote
    const voted = vote + 1

    const postVoted = await resolver.vote({id: 1, vote: 1})
    expect(postVoted).toBeDefined()
    expect(postVoted.id).toBeGreaterThan(0)
    expect(postVoted.vote).toEqual(voted)

  });
});
