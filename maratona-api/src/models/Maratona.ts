import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({
    name: 'maratonas'
})
export class Maratona {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    aula: string;
}
