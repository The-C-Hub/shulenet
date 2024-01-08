import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeSubjectTablePrimaryColumn1704711224338
  implements MigrationInterface
{
  name = 'ChangeSubjectTablePrimaryColumn1704711224338';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "subjects" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "subjects" ALTER COLUMN "id" DROP DEFAULT`,
    );
  }
}
