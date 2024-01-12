import { Course } from '@course/entities/course.entity';
import { Profile } from '@user/entities/profile.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'lessons' })
@Unique(['title', 'course'])
export class Lesson {
  @PrimaryGeneratedColumn('uuid', {
    primaryKeyConstraintName: 'pk_lesson_id',
  })
  id: string;

  @Column({ type: 'text', nullable: false })
  title: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @ManyToOne(() => Course)
  @JoinColumn({
    name: 'course_id',
    foreignKeyConstraintName: 'fk_lesson_course_id',
  })
  course: Course;

  @ManyToOne(() => Profile)
  @JoinColumn({
    name: 'created_by',
    foreignKeyConstraintName: 'fk_course_created_by',
  })
  creator: Profile;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: Date;
}
