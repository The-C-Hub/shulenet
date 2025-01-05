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
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserService } from '@user/user.service';
import { UpdateUserDetailsDto } from '@user/dto/update-user-details.dto';
import { Profile } from '@user/entities/profile.entity';
import { IsUserGuard } from '@common/guards/is-user.guard';
import {
  userResponseExample,
} from '@user/responses/user-response-examples';
import { IsAuthenticatedUserGuard } from '@common/guards/is-authenticated-user.guard';
import {
  ALLOWED_PROFILE_PHOTO_MIME_TYPES,
  MAX_UPLOAD_SIZE_IN_BYTES,
} from '@common/media/media.constants';
import { UploadFileTypeValidator } from '@common/media/media.validators';
import { IUserUpdate } from '@user/interface/user.interface';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('User')
@Controller({ path: 'user', version: '1' })
export class UserController {
  constructor(private readonly _userService: UserService) {}

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
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Update user details' })
  @ApiBody({ type: UpdateUserDetailsDto })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User details have been successfully updated.',
    content: {
      'application/json': {
        example: userResponseExample,
      },
    },
  })
  @UseInterceptors(FileInterceptor('profile_picture'))
  @UseGuards(IsUserGuard)
  public async updateUserDetails(
    @Param('userId') userId: string,
    @Body() updateUserDetailsDto: IUserUpdate,
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
    profile_picture: Express.Multer.File,
  ): Promise<Profile> {
    return await this._userService.updateUserDetails(
      userId,
      updateUserDetailsDto,
      profile_picture,
    );
  }
}
