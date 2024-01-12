import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseFilePipeBuilder,
  Patch,
  Post,
  Req,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CourseService } from '@course/course.service';
import { IsCourseInstructorGuard } from '@common/guards/is-course-instructor.guard';
import { CreateCourseDto } from '@course/dto/create-course.dto';
import { Course } from '@course/entities/course.entity';
import {
  createCourseResponseExample,
  getAllCoursesResponseExample,
  getCourseDetailsResponseExample,
  uploadCourseFeatureImageResponseExample,
} from '@course/responses/course-response-examples';
import { UpdateCourseDto } from '@course/dto/update-course.dto';
import {
  ALLOWED_PROFILE_PHOTO_MIME_TYPES,
  COURSE_FEATURE_IMAGE_STORAGE_BUCKET_NAME,
  MAX_UPLOAD_SIZE_IN_BYTES,
} from '@common/media/media.constants';
import { UploadFileTypeValidator } from '@common/media/media.validators';
import { ICourseUpdate } from '@course/interface/course.interface';
import { MediaUpload } from '@common/media/decorators/media-upload.decorators';
import { IsCourseOwnerGuard } from '@common/guards/is-course-owner.guard';

@ApiTags('Course')
@Controller({ path: 'course', version: '1' })
export class CourseController {
  constructor(private readonly _courseService: CourseService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBearerAuth()
  @ApiOperation({
    summary:
      'Create a new course  -  Only Course Instructors Can Create a Course',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The course has been successfully created',
    content: {
      'application/json': {
        example: createCourseResponseExample,
      },
    },
  })
  @UseGuards(IsCourseInstructorGuard)
  public async createCourse(
    @Body() courseDto: CreateCourseDto,
    @Req() request: Request,
  ): Promise<Course> {
    const userId = request['userId'];
    const response = await this._courseService.createCourse(courseDto, userId);
    return response;
  }

  @Post('feature-img/:courseId')
  @HttpCode(HttpStatus.CREATED)
  @ApiBearerAuth()
  @ApiOperation({
    summary:
      'Upload a course feature image  -  Only Course Instructors Can Upload a Course FeatureImg',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Course Details',
    content: {
      'application/json': {
        example: uploadCourseFeatureImageResponseExample,
      },
    },
  })
  @MediaUpload('featureImg')
  @UseGuards(IsCourseOwnerGuard)
  public async uploadCourseFeatureImage(
    @Param('courseId') courseId: string,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addValidator(
          new UploadFileTypeValidator({
            fileType: ALLOWED_PROFILE_PHOTO_MIME_TYPES,
          }),
        )
        .addMaxSizeValidator({ maxSize: MAX_UPLOAD_SIZE_IN_BYTES })
        .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
    )
    courseFeatureImg: Express.Multer.File,
  ): Promise<Course> {
    const response = await this._courseService.uploadCourseFeatureImg(
      courseId,
      COURSE_FEATURE_IMAGE_STORAGE_BUCKET_NAME,
      courseFeatureImg,
    );
    return response;
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get all courses  -  Anyone can get all courses',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'All Courses',
    content: {
      'application/json': {
        example: getAllCoursesResponseExample,
      },
    },
  })
  public async getAllCourses(): Promise<Course[]> {
    const response = await this._courseService.getAllCourses();
    return response;
  }

  @Get(':courseId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get a course by id  -  Anyone can view course details',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Course Details',
    content: {
      'application/json': {
        example: getCourseDetailsResponseExample,
      },
    },
  })
  public async getCourseById(
    @Param('courseId') courseId: string,
  ): Promise<Course> {
    const response = await this._courseService.getCourseById(courseId);
    return response;
  }

  @Patch(':courseId')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ApiOperation({
    summary:
      'Update a course by id  -  Only Course Instructors Can Update a Course',
  })
  @ApiBody({
    type: UpdateCourseDto,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Course Details',
    content: {
      'application/json': {
        example: getCourseDetailsResponseExample,
      },
    },
  })
  @UseGuards(IsCourseOwnerGuard)
  public async updateCourse(
    @Param('courseId') courseId: string,
    @Body() courseDto: ICourseUpdate,
  ): Promise<Course> {
    const response = await this._courseService.updateCourse(
      courseId,
      courseDto,
    );
    return response;
  }

  @Get('instructor/:instructorId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary:
      'Get all courses by instructor id  -  Anyone can get all courses by instructor id',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'All Courses for a given instructor',
    content: {
      'application/json': {
        example: getAllCoursesResponseExample,
      },
    },
  })
  public async getInstructorCourses(
    @Param('instructorId') instructorId: string,
  ): Promise<Course[]> {
    const response = await this._courseService.getInstructorCourses(
      instructorId,
    );
    return response;
  }
}
