import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Maratona } from 'src/models/Maratona';
import { MaratonaService } from './maratona.service';
import { MaratonaController } from './maratona.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Maratona])],
  providers: [MaratonaService],
  controllers: [MaratonaController],
})
export class MaratonaModule {}
