import { Injectable } from '@nestjs/common';
import { AuthRepository } from '@auth/auth.repository';
import { AuthCredentialsDto } from '@auth/dto/auth-credentials.dto';
import { IUserSignInResponse, IUserSignUpResponse } from '@auth/auth.types';
import { IUserSignIn } from '@auth/interface/auth.interface';

@Injectable()
export class AuthService {
  constructor(private readonly _authRepository: AuthRepository) {}

  public async emailSignup(
    authCredentialsDto: AuthCredentialsDto,
    is_student: boolean,
  ): Promise<IUserSignUpResponse> {
    return await this._authRepository.emailSignup(
      authCredentialsDto,
      is_student,
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
}
