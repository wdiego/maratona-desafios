import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { MaratonaService } from './maratona.service';
import { Maratona } from 'src/models/Maratona';

@Controller('maratona')
export class MaratonaController {
    constructor(private maratonaService: MaratonaService){}
    
    @Get()
    async listMaratonas(): Promise<Maratona[]> {
        return await this.maratonaService.findAll();
    }

    @Post()
    async create(@Body() maratonaData: Maratona): Promise<any> {
      return await this.maratonaService.create(maratonaData);
    }  

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
      return await this.maratonaService.delete(id);
    } 
}
