import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaratonaModule } from './maratona/maratona.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

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
   ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public'),
  }),
    MaratonaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
