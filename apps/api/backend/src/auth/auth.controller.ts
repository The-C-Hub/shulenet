import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from '@auth/auth.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthCredentialsDto } from '@auth/dto/auth-credentials.dto';
import { EmailSignInResponseExample, studentEmailSignUpResponseExample } from '@auth/responses/email-auth-response-examples';
import { IUserSignIn } from '@auth/interface/auth.interface';
import { IUserSignInResponse, IUserSignUpResponse } from '@auth/auth.types';

@ApiTags('Auth')
@Controller({ path: 'auth', version: '1' })
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post('student/email/signup')
  @ApiOperation({ summary: 'Sign up with email and password' })
  @ApiBody({ type: AuthCredentialsDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The user has been successfully signed up.',
    content: {
      'application/json': {
        example: studentEmailSignUpResponseExample,
      },
    },
  })
  public async studentEmailSignup(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<IUserSignUpResponse> {
    const is_student = true;
    return await this._authService.emailSignup(authCredentialsDto, is_student);
  }

  @Post('email/login')
  @ApiOperation({ summary: 'Login with email/username and password' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The user has been successfully logged in.',
    content: {
      'application/json': {
        example: EmailSignInResponseExample,
      },
    },
  })
  public async emailLogin(
    @Body() authCredentials: IUserSignIn,
  ): Promise<IUserSignInResponse> {
    return await this._authService.emailLogin(authCredentials);
  }
}
