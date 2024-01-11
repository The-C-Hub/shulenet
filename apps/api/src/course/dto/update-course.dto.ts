import { PartialType } from '@nestjs/swagger';
import { CreateCourseDto } from '@course/dto/create-course.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
