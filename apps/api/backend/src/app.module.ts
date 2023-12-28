import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AuthModule } from '@auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import {
  appConfigsValidator,
  loadAppconfigs,
} from '@common/config/configurations';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env/.env.${process.env.NODE_ENV || 'development'}`,
      load: [loadAppconfigs],
      validationSchema: appConfigsValidator,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
