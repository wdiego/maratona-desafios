import {MigrationInterface, QueryRunner} from "typeorm";

export class MaratonaMigration1588686286756 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "maratona" (id int, aula varchar(255));`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "maratona";`);
    }

}
