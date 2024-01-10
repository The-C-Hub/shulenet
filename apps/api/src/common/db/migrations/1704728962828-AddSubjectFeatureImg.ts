import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddSubjectFeatureImg1704728962828 implements MigrationInterface {
  name = 'AddSubjectFeatureImg1704728962828';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "subjects" ADD "feature_image_url" text NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "subjects" DROP COLUMN "feature_image_url"`,
    );
  }
}
