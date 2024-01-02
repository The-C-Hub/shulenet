import { Injectable } from '@nestjs/common';
import { UserRepository } from '@user/user.respository';
import { Profile } from '@user/entities/profile.entity';
import { MediaService } from '@common/media/media.service';
import { IUserUpdate } from '@user/interface/user.interface';

@Injectable()
export class UserService {
  constructor(
    private readonly _userRepository: UserRepository,
    private readonly _mediaService: MediaService,
    ) {}

  public async findUserByUsername(username: string): Promise<Profile> {
    return await this._userRepository.findUserByUsername(username);
  }

  public async findUserByEmail(email: string): Promise<Profile> {
    return await this._userRepository.findUserByEmail(email);
  }

  public async findUserById(userId: string): Promise<Profile> {
    return await this._userRepository.findUserById(userId);
  }

  public async updateUserDetails(
    userId: string,
    updateUserDetailsDto: IUserUpdate,
  ): Promise<Profile> {
    await this._userRepository.findUserById(userId);
    return await this._userRepository.updateUserDetails(
      userId,
      updateUserDetailsDto,
    );
  }

  public async uploadProfileImage(
    userId: string,
    storageBucketName: string,
    file: Express.Multer.File,
  ): Promise<any> {
    await this._userRepository.findUserById(userId);
    const response = await this._mediaService.uploadProfileImage(
      userId,
      storageBucketName,
      file,
    );
    await this._userRepository.updateUserDetails(userId, {
      profile_photo_url: response.publicUrl,
    });
    return response;
  }
}
