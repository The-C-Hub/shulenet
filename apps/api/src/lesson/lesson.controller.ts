import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { LessonService } from '@lesson/lesson.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { IsCourseOwnerGuard } from '@/common/guards/is-course-owner.guard';
import { LessonDto } from './dto/lesson.dto';
import { Lesson } from './entities/lesson.entity';

@ApiTags('Lesson')
@Controller({ path: 'lesson', version: '1' })
export class LessonController {
  constructor(private readonly _lessonService: LessonService) {}

  @Post(':courseId/course')
  @HttpCode(HttpStatus.CREATED)
  @ApiBearerAuth()
  @ApiOperation({
    summary:
      'Create a new lesson  -  Only Course Instructors Can Create a Lesson',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The lesson has been successfully created',
    // content: {
    // 	'application/json': {
    // 		example: createLessonResponseExample,
    // 	},
    // }
  })
  @UseGuards(IsCourseOwnerGuard)
  public async createLesson(
    @Param('courseId') courseId: string,
    @Body() lessonDto: LessonDto,
    @Req() request: Request,
  ): Promise<Lesson> {
    const userId = request['userId'];
    const response = await this._lessonService.createLesson(
      courseId,
      userId,
      lessonDto,
    );
    return response;
  }

  @Patch(':lessonId/course/:courseId')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Update a lesson  -  Only Course Instructors Can Update a Lesson',
  })
  @ApiBody({ type: LessonDto })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The lesson has been successfully updated',
    // content: {
    // 	'application/json': {
    // 		example: updateLessonResponseExample,
    // 	},
    // }
  })
  @UseGuards(IsCourseOwnerGuard)
  public async updateLesson(
    @Param('courseId') courseId: string,
    @Param('lessonId') lessonId: string,
    @Body() lessonDto: Partial<LessonDto>,
    @Req() request: Request,
  ): Promise<Lesson> {
    const userId = request['userId'];
    const response = await this._lessonService.updateLesson(
      lessonId,
      userId,
      lessonDto,
    );
    return response;
  }

  // @Get(':lessonId/:courseId/course')
  // @HttpCode(HttpStatus.OK)
  // @ApiBearerAuth()
}
