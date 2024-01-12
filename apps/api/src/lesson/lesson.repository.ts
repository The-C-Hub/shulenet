import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from '@lesson/entities/lesson.entity';
import { Repository } from 'typeorm';
import { LessonDto } from '@lesson/dto/lesson.dto';
import { BaseException } from '@common/exceptions/base.exception';

@Injectable()
export class LessonRepository {
  constructor(
    @InjectRepository(Lesson)
    private readonly _lessonRepository: Repository<Lesson>,
  ) {}

  public async createLesson(
    courseId: string,
    userId: string,
    createLessonDto: LessonDto,
  ): Promise<Lesson> {
    try {
      const createdLesson = this._lessonRepository.create({
        ...createLessonDto,
        creator: { id: userId },
        course: { id: courseId },
      });
      return await this._lessonRepository.save(createdLesson);
    } catch (error) {
      throw new BaseException(error.message, error.status);
    }
  }

  public async getLessonById(lessonId: string): Promise<Lesson> {
    try {
      const lesson = await this._lessonRepository.findOneOrFail({
        where: { id: lessonId },
        relations: ['creator'],
      });
      return lesson;
    } catch (error) {
      throw new BaseException(error.message, error.status);
    }
  }

  public async updateLesson(
    lessonId: string,
    userId: string,
    updateLessonDto: Partial<LessonDto>,
  ): Promise<Lesson> {
    try {
      const updateLesson = await this._lessonRepository.preload({
        id: lessonId,
        ...updateLessonDto,
        creator: { id: userId },
      });
      return await this._lessonRepository.save(updateLesson);
    } catch (error) {
      throw new BaseException(error.message, error.status);
    }
  }

  // public async getCourseLessons(courseId: string): Promise<Lesson[]> {
  // 	try {
  // 		const lessons = await this._lessonRepository.find({
  // 			where: { course: { id: courseId } },
  // 			relations: ['course', 'creator']
  // 		});
  // 		return lessons;
  // 	} catch (error) {
  // 		throw new BaseException(error.message, error.status);
  // 	}
  // }
}
