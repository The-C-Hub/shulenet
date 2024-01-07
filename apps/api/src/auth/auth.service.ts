import { Injectable } from '@nestjs/common';
import { AuthRepository } from '@auth/auth.repository';
import { AuthCredentialsDto } from '@auth/dto/auth-credentials.dto';
import { IUserSignInResponse, IUserSignUpResponse } from '@auth/auth.types';
import {
  IUserAdditionalInfo,
  IUserSignIn,
} from '@auth/interface/auth.interface';
import { ValidatePasswordDto } from '@auth/dto/validate-password.dto';
import { ValidateEmailDto } from '@auth/dto/validate-email.dto';
import { UserService } from '@user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly _authRepository: AuthRepository,
    private readonly _userService: UserService,
  ) {}

  public async emailSignup(
    authCredentialsDto: AuthCredentialsDto,
    userAddionalInfo: IUserAdditionalInfo,
  ): Promise<IUserSignUpResponse> {
    if (userAddionalInfo.is_admin) {
      return await this._authRepository.adminEmailSignup(
        authCredentialsDto,
        userAddionalInfo,
      );
    }
    return await this._authRepository.emailSignup(
      authCredentialsDto,
      userAddionalInfo,
    );
  }

  public async resendConfirmationLink(email: string): Promise<any> {
    await this._authRepository.resendConfirmationLink(email);
  }

  public async emailLogin(
    authCredentials: IUserSignIn,
  ): Promise<IUserSignInResponse> {
    if (authCredentials.username) {
      const userEmail = await this._userService.findUserByUsername(
        authCredentials.username,
      );
      return await this._authRepository.emailLogin(
        userEmail.email,
        authCredentials.password,
      );
    }
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
    const userEmail = await this._userService.findUserByEmail(email.email);
    return await this._authRepository.emailResetPassword(userEmail.email);
  }

  public async signOut(): Promise<void> {
    return await this._authRepository.signOut();
  }

  public async instructorSendEmailInvite(email: string): Promise<any> {
    return await this._authRepository.instructorSendEmailInvite(email);
  }
}
