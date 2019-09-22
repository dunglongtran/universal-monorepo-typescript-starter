import {Inject, Injectable} from '@nestjs/common';
import {AuthorRepository, PostRepository} from "@mono/repositories";
import {Author as AuthorModel} from "@mono/models"
import {InjectRepository} from '@nestjs/typeorm'
import {AuthorEntity, PostEntity} from "@mono/entities";
import {CreateAuthorInput} from './author.type';

@Injectable()
export class AuthorService {

  constructor(
    @InjectRepository(AuthorEntity)
    private readonly repository: AuthorRepository,
    @InjectRepository(PostEntity)
    private readonly repositoryPost: PostRepository
  ) {
  }

  async getAuthors() {
    return this.repository.find()
  }

  async createAuthor(arg: CreateAuthorInput) {
    const author = this.repository.create(arg)
    return this.repository.save(author)
  }

  async findPostsByAuthor(author: AuthorModel) {
    return this.repositoryPost.find({relations: ['author'], where: {author: author}})
  }
}
