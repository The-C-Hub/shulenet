import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { VersioningType } from '@nestjs/common';
import { configureSwagger } from '@common/swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  configureSwagger(app);
  app.enableCors();
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
