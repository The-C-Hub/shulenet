import { CreateSubjectDto } from '@subject/dto/subject.dto';

export interface ISubjectUpdate {
  subjectDto?: CreateSubjectDto;
  feature_img_url?: string;
}
