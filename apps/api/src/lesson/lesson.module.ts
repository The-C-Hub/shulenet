import { Module } from '@nestjs/common';
import { LessonService } from '@lesson/lesson.service';
import { LessonController } from '@lesson/lesson.controller';

@Module({
  providers: [LessonService],
  controllers: [LessonController]
})
export class LessonModule {}
