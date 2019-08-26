import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {PostModule} from "./post-module/post.module";

console.log(process.cwd())
@Module({
  imports: [PostModule, GraphQLModule.forRoot({
    typePaths: ['../**/*.graphql'],
    installSubscriptionHandlers: true,
  })],
  controllers: [],
  providers: []
})
export class ModuleGraphqlModule {
}
