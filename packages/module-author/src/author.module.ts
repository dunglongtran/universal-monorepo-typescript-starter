import {Module} from '@nestjs/common';
import {AuthorService} from './author.service';
import {AuthorResolver} from './author.resolver';
import {AuthorRepository, PostRepository} from "@mono/repositories";
import {TypeOrmModule} from '@nestjs/typeorm'
import {AuthorEntity, PostEntity} from '@mono/entities'


@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity, PostEntity])],
  providers: [AuthorRepository, PostRepository, AuthorService, AuthorResolver],
  exports: []
})
export class AuthorModule {
}
export * from './author.type'
