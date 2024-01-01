import { Injectable } from '@nestjs/common';
import { UserRepository } from '@user/user.respository';
import { Profile } from '@user/entities/profile.entity';
import { UpdateUserDetailsDto } from '@user/dto/update-user-details.dto';

@Injectable()
export class UserService {
  constructor(private readonly _userRepository: UserRepository) {}

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
    updateUserDetailsDto: UpdateUserDetailsDto,
  ): Promise<Profile> {
    await this._userRepository.findUserById(userId);
    return await this._userRepository.updateUserDetails(
      userId,
      updateUserDetailsDto,
    );
  }
}
