import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseFilePipeBuilder,
  Patch,
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
import { UserService } from '@user/user.service';
import { UpdateUserDetailsDto } from '@user/dto/update-user-details.dto';
import { Profile } from '@user/entities/profile.entity';
import { IsUserGuard } from '@common/guards/is-user.guard';
import { userProfileUploadResponse, userResponseExample } from '@user/responses/user-response-examples';
import { IsAuthenticatedUserGuard } from '@common/guards/is-authenticated-user.guard';
import { MediaUpload } from '@common/media/decorators/media-upload.decorators';
import { ALLOWED_PROFILE_PHOTO_MIME_TYPES, MAX_UPLOAD_SIZE_IN_BYTES, PROFILE_PHOTO_STORAGE_BUCKET_NAME } from '@common/media/media.constants';
import { UploadFileTypeValidator } from '@common/media/media.validators';
import { IUserUpdate } from '@user/interface/user.interface';

@ApiTags('User')
@Controller({ path: 'user', version: '1' })
export class UserController {
  constructor(private readonly _userService: UserService) { }

  @Get(':userId')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get user details' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User details have been successfully retrieved.',
    content: {
      'application/json': {
        example: userResponseExample,
      },
    },
  })
  @UseGuards(IsAuthenticatedUserGuard)
  public async getUserDetails(
    @Param('userId') userId: string,
  ): Promise<Profile> {
    return await this._userService.findUserById(userId);
  }

  @Patch(':userId')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update user details' })
  @ApiBody({ type: UpdateUserDetailsDto })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User details have been successfully updated.',
    type: UpdateUserDetailsDto,
    content: {
      'application/json': {
        example: userResponseExample,
      },
    },
  })
  @UseGuards(IsUserGuard)
  public async updateUserDetails(
    @Param('userId') userId: string,
    @Body() updateUserDetailsDto: IUserUpdate
  ): Promise<Profile> {
    return await this._userService.updateUserDetails(
      userId,
      updateUserDetailsDto,
    );
  }

  @Patch('/profile-picture/:userId')
  @ApiBearerAuth()
  @ApiOperation({ summary: `Upload profile picture. The Following are the allowed types:  ${ALLOWED_PROFILE_PHOTO_MIME_TYPES}` })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Profile picture has been successfully uploaded.',
    content: {
      'application/json': {
        example: userProfileUploadResponse,
      },
    },
  })
  @MediaUpload('profilePicture')
  @UseGuards(IsUserGuard)
  public async uploadProfilePicture(
    @Param('userId') userId: string,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addValidator(
          new UploadFileTypeValidator({
            fileType: ALLOWED_PROFILE_PHOTO_MIME_TYPES,
          })
        )
        .addMaxSizeValidator({ maxSize: MAX_UPLOAD_SIZE_IN_BYTES })
        .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY })
    )
    profilePicture: Express.Multer.File,
  ): Promise<any> {;
    return await this._userService.uploadProfileImage(
      userId,
      PROFILE_PHOTO_STORAGE_BUCKET_NAME,
      profilePicture
    );
  }
}
