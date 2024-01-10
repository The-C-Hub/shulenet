import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCoursesTable1704869423318 implements MigrationInterface {
  name = 'CreateCoursesTable1704869423318';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "courses" ADD CONSTRAINT "UQ_a01a7f0e38c6f16024d16058ab5" UNIQUE ("title")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "courses" DROP CONSTRAINT "UQ_a01a7f0e38c6f16024d16058ab5"`,
    );
  }
}
