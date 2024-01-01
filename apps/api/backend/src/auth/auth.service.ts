import { Injectable } from '@nestjs/common';
import { AuthRepository } from '@auth/auth.repository';
import { AuthCredentialsDto } from '@auth/dto/auth-credentials.dto';
import { IUserSignInResponse, IUserSignUpResponse } from '@auth/auth.types';
import { IUserSignIn } from '@auth/interface/auth.interface';
import { ValidatePasswordDto } from '@auth/dto/validate-password.dto';
import { ValidateEmailDto } from '@auth/dto/validate-email.dto';

@Injectable()
export class AuthService {
  constructor(private readonly _authRepository: AuthRepository) {}

  public async emailSignup(
    authCredentialsDto: AuthCredentialsDto,
    isCourseInstructor: boolean,
  ): Promise<IUserSignUpResponse> {
    return await this._authRepository.emailSignup(
      authCredentialsDto,
      isCourseInstructor,
    );
  }

  public async emailLogin(
    authCredentials: IUserSignIn,
  ): Promise<IUserSignInResponse> {
    // find user by username and extract the email address when found and pass it to the emailLogin method
    return await this._authRepository.emailLogin(
      authCredentials.email,
      authCredentials.password,
    );
  }

  public async emailChangePassword(
    password: ValidatePasswordDto,
  ): Promise<void> {
    return await this._authRepository.emailChangePassword(password);
  }

  public async emailResetPassword(email: ValidateEmailDto): Promise<void> {
    // find user by email address before calling the emailResetPassword method
    return await this._authRepository.emailResetPassword(email);
  }

  public async signOut(): Promise<void> {
    return await this._authRepository.signOut();
  }
}
