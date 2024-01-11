import { UpdateCourseDto } from '@course/dto/update-course.dto';

export interface ICourseUpdate {
  updateCourseDto?: UpdateCourseDto;
  feature_img_url?: string;
}
