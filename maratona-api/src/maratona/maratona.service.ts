import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Maratona } from 'src/models/Maratona';
import { Repository } from 'typeorm';

@Injectable()
export class MaratonaService {
    constructor(
        @InjectRepository(Maratona)
        private maratonaRepository: Repository<Maratona>,
    ) { }

    async findAll(): Promise<Maratona[]> {
        return await this.maratonaRepository.find();
    }

    async findOne(id: string): Promise<Maratona> {
        return await this.maratonaRepository.findOne(id);
    }

    async create(maratonData: Maratona): Promise<Maratona> {
        return await this.maratonaRepository.save(maratonData);
    }

    async delete(id: string): Promise<void> {
        await this.maratonaRepository.delete(id);
    }
}
