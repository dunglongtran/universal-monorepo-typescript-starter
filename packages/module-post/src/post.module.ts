import {Module} from '@nestjs/common';
import {PostService} from './post.service';
import {PostResolver} from './post.resolver';
import {AuthorRepository, PostRepository} from "@mono/repositories";
import {TypeOrmModule} from '@nestjs/typeorm'
import {AuthorEntity, PostEntity} from '@mono/entities'

@Module({
  imports:[TypeOrmModule.forFeature([PostEntity,AuthorEntity])],
  providers: [AuthorRepository,PostRepository, PostService, PostResolver]
})
export class PostModule {
}
export * from './post.type'
