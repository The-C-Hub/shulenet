import { Module } from '@nestjs/common';
import { CourseService } from '@course/course.service';
import { CourseController } from '@course/course.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from '@course/entities/course.entity';
import { Subject } from '@subject/entities/subject.entity';
import { CourseRepository } from '@course/course.repository';
import { UserRepository } from '@user/user.respository';
import { Profile } from '@user/entities/profile.entity';
import { MediaModule } from '@common/media/media.module';

@Module({
  imports: [TypeOrmModule.forFeature([Course, Subject, Profile]), MediaModule],
  providers: [CourseService, CourseRepository, UserRepository],
  controllers: [CourseController],
})
export class CourseModule {}
