import {
  Body,
  Controller,
  Delete,
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
import { SubjectService } from '@subject/subject.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { IsAdminGuard } from '@common/guards/is-admin.guard';
import { CreateSubjectDto } from '@subject/dto/subject.dto';
import { Subject } from '@subject/entities/subject.entity';
import {
  allSubjectsResponseExample,
  createSubjectResponseExample,
  subjectDetailResponseExample,
  subjectFeatureImageResponseExample,
} from '@subject/responses/subject-response-examples';
import { MediaUpload } from '@common/media/decorators/media-upload.decorators';
import {
  ALLOWED_PROFILE_PHOTO_MIME_TYPES,
  MAX_UPLOAD_SIZE_IN_BYTES,
  SUBJECT_FEATURE_IMAGE_STORAGE_BUCKET_NAME,
} from '@common/media/media.constants';
import { UploadFileTypeValidator } from '@common/media/media.validators';
import { ISubjectUpdate } from '@subject/interface/subject.interface';

@ApiTags('Subject')
@Controller({ path: 'subject', version: '1' })
export class SubjectController {
  constructor(private readonly _courseService: SubjectService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Create a new subject  -  Only Admins Can Create a Subject',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The subject has been successfully created',
    content: {
      'application/json': {
        example: createSubjectResponseExample,
      },
    },
  })
  @UseGuards(IsAdminGuard)
  public async createSubject(
    @Body() subjectDto: CreateSubjectDto,
    @Req() request: Request,
  ): Promise<Subject> {
    const userId = request['userId'];
    const response = await this._courseService.createSubject(
      subjectDto,
      userId,
    );
    return response;
  }

  @Get(':subjectId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary:
      'Get a subject by id  -  Anyone Can Get a Subject, Authenticated or Not',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The subject has been successfully retreived',
    content: {
      'application/json': {
        example: subjectDetailResponseExample,
      },
    },
  })
  public async getSubjectById(
    @Param('subjectId') subjectId: string,
  ): Promise<Subject> {
    const response = await this._courseService.getSubjectById(subjectId);
    return response;
  }

  @Patch('/feature-img/:subjectId')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ApiOperation({
    summary:
      'Update a subject feature image  -  Only Admins Can Upload a Subject FeatureImg',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The subject feature image has been successfully updated',
    content: {
      'application/json': {
        example: subjectFeatureImageResponseExample,
      },
    },
  })
  @UseGuards(IsAdminGuard)
  @MediaUpload('featureImage')
  public async uploadSubjectFeatureImg(
    @Param('subjectId') subjectId: string,
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
    subjectFeatureImg: Express.Multer.File,
  ): Promise<Subject> {
    const response = await this._courseService.uploadSubjectFeatureImg(
      subjectId,
      SUBJECT_FEATURE_IMAGE_STORAGE_BUCKET_NAME,
      subjectFeatureImg,
    );
    return response;
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary:
      'Get All Subjects  -  Anyone Can Get All Subjects, Whether Authenticated or Not',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The subject has been successfully created',
    content: {
      'application/json': {
        example: allSubjectsResponseExample,
      },
    },
  })
  public async getAllSubjects(): Promise<Subject[]> {
    const response = await this._courseService.getAllSubjects();
    return response;
  }

  @Patch(':subjectId')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Update a subject  -  Only Admins Can Update a Subject',
  })
  @ApiBody({ type: CreateSubjectDto })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The subject has been successfully updated',
    content: {
      'application/json': {
        example: createSubjectResponseExample,
      },
    },
  })
  @UseGuards(IsAdminGuard)
  public async updateSubject(
    @Param('subjectId') subjectId: string,
    @Body() subjectDto: ISubjectUpdate,
  ): Promise<Subject> {
    const response = await this._courseService.updateSubject(
      subjectId,
      subjectDto,
    );
    return response;
  }

  @Delete(':subjectId')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Delete a subject  -  Only Admins Can Delete a Subject',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
  })
  @UseGuards(IsAdminGuard)
  public async deleteSubject(
    @Param('subjectId') subjectId: string,
  ): Promise<void> {
    await this._courseService.deleteSubject(subjectId);
  }
}
