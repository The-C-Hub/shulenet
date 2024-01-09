import { Module } from '@nestjs/common';
import { CourseController } from '@course/course.controller';
import { CourseService } from '@course/course.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from '@course/entities/subject.entity';
import { Profile } from '@user/entities/profile.entity';
import { SubjectRepository } from '@/course/repositories/subject.repository';
import { UserRepository } from '@user/user.respository';
import { MediaModule } from '@common/media/media.module';

@Module({
  imports: [TypeOrmModule.forFeature([Subject, Profile]), MediaModule],
  controllers: [CourseController],
  providers: [CourseService, SubjectRepository, UserRepository],
})
export class CourseModule {}
