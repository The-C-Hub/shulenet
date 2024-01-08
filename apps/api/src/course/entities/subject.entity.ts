import { Profile } from '@user/entities/profile.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'subjects' })
export class Subject {
  @PrimaryGeneratedColumn('uuid', {
    primaryKeyConstraintName: 'pk_subject_id',
  })
  id: string;

  @Column({ type: 'text', nullable: false })
  title: string;

  @Column({ type: 'text', nullable: true })
  feature_image_url: string;

  @ManyToOne(() => Profile)
  @JoinColumn({
    name: 'created_by',
    foreignKeyConstraintName: 'fk_subject_created_by',
  })
  creator: Profile;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamptz', nullable: true })
  updated_at: Date;
}
