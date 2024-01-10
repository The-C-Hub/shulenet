import { Module } from '@nestjs/common';
import { CourseService } from '@course/course.service';
import { CourseController } from '@course/course.controller';

@Module({
  providers: [CourseService],
  controllers: [CourseController]
})
export class CourseModule {}
