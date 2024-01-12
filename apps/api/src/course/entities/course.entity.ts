import { Profile } from '@user/entities/profile.entity';
import { Subject } from '@subject/entities/subject.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Lesson } from '@/lesson/entities/lesson.entity';

@Entity({ name: 'courses' })
@Unique(['title'])
export class Course {
  @PrimaryGeneratedColumn('uuid', {
    primaryKeyConstraintName: 'pk_course_id',
  })
  id: string;

  @Column({ type: 'text', nullable: false })
  title: string;

  @Column({ type: 'text', nullable: false })
  overview: string;

  @Column({ type: 'text', nullable: true })
  feature_image_url: string;

  @ManyToOne(() => Profile)
  @JoinColumn({
    name: 'created_by',
    foreignKeyConstraintName: 'fk_course_created_by',
  })
  creator: Profile;

  @ManyToOne(() => Subject)
  @JoinColumn({
    name: 'subject_id',
    foreignKeyConstraintName: 'fk_course_subject_id',
  })
  subject: Subject;

  @OneToMany(() => Lesson, (lesson) => lesson.course)
  lessons: Lesson[];

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: Date;
}
