import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ModuleDatabaseModule} from '@mono/module-database'

@Module({
  imports: [ModuleDatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
