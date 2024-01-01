import { BaseException } from '@common/exceptions/base.exception';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from '@user/entities/profile.entity';
import { Repository } from 'typeorm';
import { UpdateUserDetailsDto } from '@user/dto/update-user-details.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(Profile)
    private readonly _userRepository: Repository<Profile>,
  ) {}

  public async findUserById(userId: string): Promise<Profile> {
    try {
      const profile = await this._userRepository.findOne({
        where: {
          id: userId,
        },
      });
      return profile;
    } catch (error) {
      throw new BaseException(error.message, error.status);
    }
  }

  public async findUserByUsername(username: string): Promise<Profile> {
    try {
      const profile = await this._userRepository.findOneOrFail({
        where: {
          username: username,
        },
      });
      return profile;
    } catch (error) {
      throw new BaseException(error.message, error.status);
    }
  }

  public async findUserByEmail(email: string): Promise<Profile> {
    try {
      const profile = await this._userRepository.findOneOrFail({
        where: {
          email: email,
        },
      });
      return profile;
    } catch (error) {
      throw new BaseException(error.message, error.status);
    }
  }

  public async updateUserDetails(
    userId: string,
    updateUserDetailsDto: Partial<UpdateUserDetailsDto>,
  ): Promise<Profile> {
    try {
      const updatedProfile = await this._userRepository.preload({
        id: userId,
        ...updateUserDetailsDto,
      });
      return this._userRepository.save(updatedProfile);
    } catch (error) {
      throw new BaseException(error.message, error.status);
    }
  }
}
