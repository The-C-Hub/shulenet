import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUpdatedAtFieldInProfilesTable1704083727585
  implements MigrationInterface
{
  name = 'AddUpdatedAtFieldInProfilesTable1704083727585';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "profiles" ADD "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "profiles" DROP COLUMN "updated_at"`);
  }
}
