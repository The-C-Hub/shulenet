import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProfilesTable1704030660590 implements MigrationInterface {
    name = 'CreateProfilesTable1704030660590'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "profiles" ("id" uuid NOT NULL, "first_name" text, "last_name" text, "email" text NOT NULL, "profile_photo_url" text, "is_course_instructor" boolean NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_5b49bd22c967ce2829ca8f17720" UNIQUE ("email"), CONSTRAINT "uq_profiles_email" UNIQUE ("email"), CONSTRAINT "pk_profiles_id" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "profiles"`);
    }

}
