import { Module } from '@nestjs/common';
import { AuthService } from '@auth/auth.service';
import { AuthController } from '@auth/auth.controller';
import { AuthRepository } from '@auth/auth.repository';
import { SupabaseModule } from '@common/supabase/supabase.module';
import { UserModule } from '@user/user.module';
import { UserService } from '@user/user.service';

@Module({
  imports: [SupabaseModule, UserModule],
  providers: [AuthService, AuthRepository, UserService],
  controllers: [AuthController],
})
export class AuthModule {}
