import { BaseException } from '@common/exceptions/base.exception';
import { IUserSignInResponse, IUserSignUpResponse } from '@auth/auth.types';
import { SupabaseService } from '@common/supabase/supabase.service';
import { Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { AuthCredentialsDto } from '@auth/dto/auth-credentials.dto';
import { ValidatePasswordDto } from '@auth/dto/validate-password.dto';
import { IUserAdditionalInfo } from '@auth/interface/auth.interface';

@Injectable()
export class AuthRepository {
  private _supabase: SupabaseClient;
  private _supabaseAdmin: SupabaseClient;

  constructor(private readonly _supabaseClientFactory: SupabaseService) {
    this._supabase = this._supabaseClientFactory.createClient();
    this._supabaseAdmin = this._supabaseClientFactory.createAdminClient();
  }

  public async emailSignup(
    authCredentialsDto: AuthCredentialsDto,
    userAddionalInfo: IUserAdditionalInfo,
  ): Promise<IUserSignUpResponse> {
    const { data, error } = await this._supabase.auth.signUp({
      email: authCredentialsDto.email,
      password: authCredentialsDto.password,
      options: {
        data: {
          full_name: authCredentialsDto.fullName,
          username: authCredentialsDto.username,
          is_course_instructor: userAddionalInfo.is_course_instructor,
        },
      },
    });
    if (error) {
      throw new BaseException(error.message, error.status);
    }
    return data;
  }

  public async adminEmailSignup(
    authCredentialsDto: AuthCredentialsDto,
    userAddionalInfo: IUserAdditionalInfo,
  ): Promise<any> {
    const { data, error } = await this._supabaseAdmin.auth.admin.createUser({
      email: authCredentialsDto.email,
      password: authCredentialsDto.password,
      role: 'service_role',
      email_confirm: true,
      user_metadata: {
        full_name: authCredentialsDto.fullName,
        username: authCredentialsDto.username,
        is_course_instructor: userAddionalInfo.is_course_instructor,
      },
    });
    if (error) {
      throw new BaseException(error.message, error.status);
    }
    return data;
  }

  public async instructorSendEmailInvite(email: string): Promise<any> {
    const { data, error } = await this._supabaseAdmin.auth.admin.inviteUserByEmail(
      email,
      {
        data: {
          is_course_instructor: true,
        },
        redirectTo: 'http://localhost:3001/api#/Auth/AuthController_emailChangePassword',
      },
    );
    if (error) {
      throw new BaseException(error.message, error.status);
    }
    return data;
  }

  public async resendConfirmationLink(email: string): Promise<any> {
    const { error } = await this._supabase.auth.resend({
      type: 'signup',
      email,
    });
    if (error) {
      throw new BaseException(error.message, error.status);
    }
  }

  public async emailLogin(
    email: string,
    password: string,
  ): Promise<IUserSignInResponse> {
    const { data, error } = await this._supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      throw new BaseException(error.message, error.status);
    }
    return data;
  }

  public async emailChangePassword(
    password: ValidatePasswordDto,
  ): Promise<void> {
    const { error } = await this._supabase.auth.updateUser({
      password: password.password,
    });
    if (error) {
      throw new BaseException(error.message, error.status);
    }
  }

  public async emailResetPassword(email: string): Promise<any> {
    const { data, error } = await this._supabase.auth.resetPasswordForEmail(
      email,
      {
        redirectTo:
          'http://localhost:3000/api#/Auth/AuthController_emailChangePassword',
      },
    );
    if (error) {
      throw new BaseException(error.message, error.status);
    }
    return data;
  }

  public async signOut(): Promise<void> {
    const { error } = await this._supabase.auth.signOut();
    if (error) {
      throw new BaseException(error.message, error.status);
    }
  }
}
