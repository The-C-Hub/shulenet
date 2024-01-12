import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateLessonsTable1705042035610 implements MigrationInterface {
  name = 'CreateLessonsTable1705042035610';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "lessons" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" text NOT NULL, "description" text NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "course_id" uuid, "created_by" uuid, CONSTRAINT "UQ_06f97907180d4484bb07813a67c" UNIQUE ("title", "course_id"), CONSTRAINT "pk_lesson_id" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "lessons" ADD CONSTRAINT "fk_lesson_course_id" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "lessons" ADD CONSTRAINT "fk_course_created_by" FOREIGN KEY ("created_by") REFERENCES "profiles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "lessons" DROP CONSTRAINT "fk_course_created_by"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lessons" DROP CONSTRAINT "fk_lesson_course_id"`,
    );
    await queryRunner.query(`DROP TABLE "lessons"`);
  }
}
