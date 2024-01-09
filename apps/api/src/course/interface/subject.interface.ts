import { CreateSubjectDto } from '@course/dto/subject.dto';

export interface ISubjectUpdate {
  subjectDto?: CreateSubjectDto;
  feature_img_url?: string;
}
