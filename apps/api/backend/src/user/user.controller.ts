import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
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
import { userResponseExample } from '@user/responses/user-response-examples';
import { IsAuthenticatedUserGuard } from '@common/guards/is-authenticated-user.guard';

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
			example: userResponseExample
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
    content: {
    	'application/json': {
    		example: userResponseExample
    	},
    },
  })
  @UseGuards(IsUserGuard)
  public async updateUserDetails(
    @Param('userId') userId: string,
    @Body() updateUserDetailsDto: UpdateUserDetailsDto,
  ): Promise<Profile> {
    return await this._userService.updateUserDetails(
      userId,
      updateUserDetailsDto,
    );
  }
}
