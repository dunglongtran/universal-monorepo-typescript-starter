import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {PostModule} from "@mono/module-post";
import {AuthorModule} from "@mono/module-author";


@Module({
  imports: [AuthorModule,PostModule, GraphQLModule.forRoot({autoSchemaFile: 'schema.gql',installSubscriptionHandlers: true})]
})
export class ModuleGraphqlModule {
}
