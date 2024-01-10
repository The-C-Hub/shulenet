import { Module } from '@nestjs/common';
import { SubjectController } from '@subject/subject.controller';
import { SubjectService } from '@subject/subject.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from '@subject/entities/subject.entity';
import { Profile } from '@user/entities/profile.entity';
import { SubjectRepository } from '@subject/subject.repository';
import { UserRepository } from '@user/user.respository';
import { MediaModule } from '@common/media/media.module';

@Module({
  imports: [TypeOrmModule.forFeature([Subject, Profile]), MediaModule],
  controllers: [SubjectController],
  providers: [SubjectService, SubjectRepository, UserRepository],
})
export class SubjectModule {}
