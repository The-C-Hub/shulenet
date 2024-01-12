import { Module } from '@nestjs/common';
import { LessonService } from '@lesson/lesson.service';
import { LessonController } from '@lesson/lesson.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from '@lesson/entities/lesson.entity';
import { Course } from '@course/entities/course.entity';
import { Profile } from '@user/entities/profile.entity';
import { LessonRepository } from '@lesson/lesson.repository';
import { UserRepository } from '@user/user.respository';
import { CourseRepository } from '@course/course.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson, Course, Profile])],
  providers: [
    LessonService,
    LessonRepository,
    UserRepository,
    CourseRepository,
  ],
  controllers: [LessonController],
})
export class LessonModule {}
