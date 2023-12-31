import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AuthModule } from '@auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import {
  appConfigsValidator,
  loadAppconfigs,
} from '@common/config/configurations';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformResponseInterceptors } from '@common/interceptors/response.interceptor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from '@common/typeorm/typeorm.config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env/.env.${process.env.NODE_ENV || 'development'}`,
      load: [loadAppconfigs],
      validationSchema: appConfigsValidator,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformResponseInterceptors,
    },
  ],
})
export class AppModule {}
