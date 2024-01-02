import { BaseException } from '@common/exceptions/base.exception';
import { IUserSignInResponse, IUserSignUpResponse } from '@auth/auth.types';
import { SupabaseService } from '@common/supabase/supabase.service';
import { Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { AuthCredentialsDto } from '@auth/dto/auth-credentials.dto';
import { ValidatePasswordDto } from '@auth/dto/validate-password.dto';

@Injectable()
export class AuthRepository {
  private _supabase: SupabaseClient;

  constructor(private readonly _supabaseClientFactory: SupabaseService) {
    this._supabase = this._supabaseClientFactory.createClient();
  }

  public async emailSignup(
    authCredentialsDto: AuthCredentialsDto,
    isCourseInstructor: boolean,
  ): Promise<IUserSignUpResponse> {
    const { data, error } = await this._supabase.auth.signUp({
      email: authCredentialsDto.email,
      password: authCredentialsDto.password,
      options: {
        data: {
          full_name: authCredentialsDto.fullName,
          username: authCredentialsDto.username,
          is_course_instructor: isCourseInstructor,
        },
      },
    });
    if (error) {
      throw new BaseException(error.message, error.status);
    }
    return data;
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
