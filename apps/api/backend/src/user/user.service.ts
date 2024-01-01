import { Injectable } from '@nestjs/common';
import { UserRepository } from '@user/user.respository';
import { Profile } from '@user/entities/profile.entity';

@Injectable()
export class UserService {
  constructor(private readonly _userRepository: UserRepository) {}

  public async findUserByUsername(username: string): Promise<Profile> {
    return await this._userRepository.findUserByUsername(username);
  }

  public async findUserByEmail(email: string): Promise<Profile> {
    return await this._userRepository.findUserByEmail(email);
  }
}
