import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateProfilesTable1704084869222 implements MigrationInterface {
    name = 'UpdateProfilesTable1704084869222'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "first_name"`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "last_name"`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD "full_name" text`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD "username" text`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD CONSTRAINT "UQ_d1ea35db5be7c08520d70dc03f8" UNIQUE ("username")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profiles" DROP CONSTRAINT "UQ_d1ea35db5be7c08520d70dc03f8"`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "full_name"`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD "last_name" text`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD "first_name" text`);
    }

}
