import {Injectable} from '@nestjs/common';
import {EntityRepository, Repository} from "typeorm";
import {AuthorEntity} from "@mono/entities";

@Injectable()
@EntityRepository(AuthorEntity)
export class AuthorRepository extends Repository<AuthorEntity> {

}
