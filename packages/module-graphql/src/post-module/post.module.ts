import { Module } from '@nestjs/common';
import { PostResolvers } from './post.resolver';
import { PostService } from './post.service';

@Module({
  providers: [PostService, PostResolvers],
})
export class PostModule {}
