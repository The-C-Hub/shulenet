import { Module } from '@nestjs/common';
import { UserService } from '@user/user.service';
import { UserController } from '@user/user.controller';
import { UserRepository } from '@user/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from '@user/entities/profile.entity';
import { MediaModule } from '@common/media/media.module';

@Module({
  imports: [TypeOrmModule.forFeature([Profile]), MediaModule],
  providers: [UserService, UserRepository],
  controllers: [UserController],
  exports: [UserService, UserRepository],
})
export class UserModule {}
