import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateSubjectFeatureImg1704729081558
  implements MigrationInterface
{
  name = 'UpdateSubjectFeatureImg1704729081558';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "subjects" ALTER COLUMN "feature_image_url" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "subjects" ALTER COLUMN "feature_image_url" SET NOT NULL`,
    );
  }
}
