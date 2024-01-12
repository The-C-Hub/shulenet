import { Injectable } from '@nestjs/common';
import { LessonRepository } from '@lesson/lesson.repository';
import { LessonDto } from '@lesson/dto/lesson.dto';
import { Lesson } from '@lesson/entities/lesson.entity';

@Injectable()
export class LessonService {
  constructor(private readonly _lessonRepository: LessonRepository) {}

  public async createLesson(
    courseId: string,
    userId: string,
    createLessonDto: LessonDto,
  ): Promise<Lesson> {
    const response = await this._lessonRepository.createLesson(
      courseId,
      userId,
      createLessonDto,
    );
    return await this._lessonRepository.getLessonById(response.id);
  }

  public async getLessonById(lessonId: string): Promise<Lesson> {
    return await this._lessonRepository.getLessonById(lessonId);
  }

  public async updateLesson(
    lessonId: string,
    userId: string,
    updateLessonDto: Partial<LessonDto>,
  ): Promise<Lesson> {
    const response = await this._lessonRepository.updateLesson(
      lessonId,
      userId,
      updateLessonDto,
    );
    return await this._lessonRepository.getLessonById(response.id);
  }
}
