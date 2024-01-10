import { Profile } from '@user/entities/profile.entity';
import { Subject } from '@subject/entities/subject.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity({ name: 'courses' })
@Unique(['title'])
export class subject {
  @PrimaryGeneratedColumn('uuid', {
    primaryKeyConstraintName: 'pk_course_id',
  })
  id: string;

  @Column({ type: 'text', nullable: false })
  title: string;

  @Column({ type: 'text', nullable: false })
  overview: string;

  @Column({ type: 'text' })
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

  @Column({ type: 'timestamptz' })
  created_at: Date;

  @Column({ type: 'timestamptz' })
  updated_at: Date;
}
