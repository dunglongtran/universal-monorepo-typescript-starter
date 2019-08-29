import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PostEntity, AuthorEntity} from '@mono/entities'

@Module({
  imports: [TypeOrmModule.forRoot({
    url: "postgres://osevjqhz:rlxfAoVclLthQn3NvJjUvCTQrdxf1hJP@baasu.db.elephantsql.com:5432/osevjqhz",
    type: "postgres",
    host: "baasu.db.elephantsql.com",
    username: "osevjqhz",
    password: "rlxfAoVclLthQn3NvJjUvCTQrdxf1hJP",
    database: "osevjqhz",
    port: 5432,
    entities: [PostEntity,AuthorEntity],
    synchronize: true
  })]
})
export class ModuleDatabaseModule {
}
