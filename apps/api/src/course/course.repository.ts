import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from '@course/dto/create-course.dto';
import { BaseException } from '@common/exceptions/base.exception';
import { Course } from '@course/entities/course.entity';
import { ICourseUpdate } from '@course/interface/course.interface';

@Injectable()
export class CourseRepository {
  constructor(
    @InjectRepository(Course)
    private readonly _courseRepository: Repository<Course>,
  ) {}

  public async createCourse(
    createCourseDto: CreateCourseDto,
    userId: string,
  ): Promise<Course> {
    try {
      const createdCourse = this._courseRepository.create({
        ...createCourseDto,
        subject: { id: createCourseDto.subject },
        creator: { id: userId },
      });
      const newCourse = await this._courseRepository.save(createdCourse);
      return newCourse;
    } catch (error) {
      throw new BaseException(error.message, error.status);
    }
  }

  public async getCourseById(courseId: string): Promise<Course> {
    try {
      const course = await this._courseRepository.findOneOrFail({
        where: { id: courseId },
        relations: ['subject', 'creator'],
      });
      return course;
    } catch (error) {
      throw new BaseException(error.message, error.status);
    }
  }

  public async getAllCourses(): Promise<Course[]> {
    try {
      const courses = await this._courseRepository.find({
        relations: ['subject', 'creator'],
      });
      return courses;
    } catch (error) {
      throw new BaseException(error.message, error.status);
    }
  }

  public async updateCourse(
    courseId: string,
    updateCourse: ICourseUpdate,
  ): Promise<Course> {
    try {
      const updatedCourse = await this._courseRepository.preload({
        id: courseId,
        feature_image_url: updateCourse.feature_img_url,
        ...updateCourse,
      });
      return this._courseRepository.save(updatedCourse);
    } catch (error) {
      throw new BaseException(error.message, error.status);
    }
  }

  public async getInstructorCourses(instructorId: string): Promise<Course[]> {
    try {
      const courses = await this._courseRepository.find({
        where: { creator: { id: instructorId } },
        relations: ['subject', 'creator'],
      });
      return courses;
    } catch (error) {
      throw new BaseException(error.message, error.status);
    }
  }

  public async deleteCourse(courseId: string, userId: string): Promise<void> {
    try {
      await this._courseRepository.delete({
        id: courseId,
        creator: { id: userId },
      });
    } catch (error) {
      throw new BaseException(error.message, error.status);
    }
  }
}
