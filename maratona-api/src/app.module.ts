import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaratonaModule } from './maratona/maratona.module';
import {ConnectionOptions, DatabaseType} from 'typeorm';

require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.TYPEORM_DATABASE,
      entities: [
        process.env.TYPEORM_ENTITIES
      ],
      migrations: [
        process.env.TYPEORM_MIGRATIONS
      ],
      synchronize: true,
      cli: {
        migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR
      },
   }),
    MaratonaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
