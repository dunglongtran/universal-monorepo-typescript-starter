import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ModuleDatabaseModule} from '@mono/module-database'
import {ModuleGraphqlModule} from "@mono/module-graphql";


@Module({
  imports: [ModuleDatabaseModule,ModuleGraphqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
