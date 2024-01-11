import { Injectable } from '@nestjs/common';
import { CourseRepository } from '@course/course.repository';
import { CreateCourseDto } from '@course/dto/create-course.dto';
import { Course } from '@course/entities/course.entity';
import { MediaService } from '@common/media/media.service';
import { ICourseUpdate } from '@course/interface/course.interface';

@Injectable()
export class CourseService {
  constructor(
    private readonly _courseRepository: CourseRepository,
    private readonly _mediaService: MediaService,
  ) {}

  public async createCourse(
    createCourseDto: CreateCourseDto,
    userId: string,
  ): Promise<Course> {
    const response = await this._courseRepository.createCourse(
      createCourseDto,
      userId,
    );
    return await this._courseRepository.getCourseById(response.id);
  }

  public async getCourseById(courseId: string): Promise<Course> {
    return await this._courseRepository.getCourseById(courseId);
  }

  public async getAllCourses(): Promise<Course[]> {
    return await this._courseRepository.getAllCourses();
  }

  public async updateCourse(
    courseId: string,
    updateCourseDto: ICourseUpdate,
  ): Promise<Course> {
    const response = await this._courseRepository.updateCourse(
      courseId,
      updateCourseDto,
    );
    return await this._courseRepository.getCourseById(response.id);
  }

  public async uploadCourseFeatureImg(
    courseId: string,
    storageBucketName: string,
    file: Express.Multer.File,
  ): Promise<any> {
    await this._courseRepository.getCourseById(courseId);
    const response = await this._mediaService.uploadImage(
      courseId,
      storageBucketName,
      file,
    );
    await this._courseRepository.updateCourse(courseId, {
      feature_img_url: response.publicUrl,
    });
    return response;
  }

  public async getInstructorCourses(instructorId: string): Promise<Course[]> {
    return await this._courseRepository.getInstructorCourses(instructorId);
  }

  // public async deleteCourse(courseId: string): Promise<void> {
  //   return await this._courseRepository.deleteCourse(courseId);
  // }
}
