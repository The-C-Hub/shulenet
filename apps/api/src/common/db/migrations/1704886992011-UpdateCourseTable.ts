import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateCourseTable1704886992011 implements MigrationInterface {
  name = 'UpdateCourseTable1704886992011';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "courses" ALTER COLUMN "created_at" SET DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "courses" ALTER COLUMN "updated_at" SET DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "courses" ALTER COLUMN "updated_at" DROP DEFAULT`,
    );
    await queryRunner.query(
      `ALTER TABLE "courses" ALTER COLUMN "created_at" DROP DEFAULT`,
    );
  }
}
