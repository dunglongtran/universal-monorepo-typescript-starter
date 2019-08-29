import {Injectable} from '@nestjs/common';
import {EntityRepository, Repository} from "typeorm";
import {PostEntity} from "@mono/entities";

@Injectable()
@EntityRepository(PostEntity)
export class PostRepository extends Repository<PostEntity> {

}
