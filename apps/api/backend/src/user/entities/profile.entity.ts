import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  Unique,
} from 'typeorm';

@Entity({ name: 'profiles' })
@Unique('uq_profiles_email', ['email'])
export class Profile {
  @PrimaryColumn({ type: 'uuid', primaryKeyConstraintName: 'pk_profiles_id' })
  id: string;

  @Column({ type: 'text', nullable: true })
  first_name: string;

  @Column({ type: 'text', nullable: true })
  last_name: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text', nullable: true })
  profile_photo_url: string;

  @Column({ name: 'is_course_instructor' })
  is_course_instructor: boolean;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;
}
