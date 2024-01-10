import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSubjectsTable1704710934721 implements MigrationInterface {
  name = 'CreateSubjectsTable1704710934721';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "subjects" ("id" uuid NOT NULL, "title" text NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT now(), "created_by" uuid, CONSTRAINT "pk_subjects_id" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "subjects" ADD CONSTRAINT "fk_subject_created_by" FOREIGN KEY ("created_by") REFERENCES "profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "subjects" DROP CONSTRAINT "fk_subject_created_by"`,
    );
    await queryRunner.query(`DROP TABLE "subjects"`);
  }
}
