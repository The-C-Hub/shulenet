import { BaseException } from '@common/exceptions/base.exception';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from '@user/entities/profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(Profile)
    private readonly _userRepository: Repository<Profile>,
  ) {}

  public async findUserById(id: string): Promise<Profile> {
    try {
      const profile = await this._userRepository.findOne({
        where: {
          id: id,
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
}
