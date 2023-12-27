import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

export function configureSwagger(app: INestApplication) {
  const configOptions = new DocumentBuilder()
    .setTitle('ShuleNet API documentation')
    .setDescription('API documentation for ShuleNet (V1)')
    .setVersion('v1')
    .addBearerAuth()
    .addTag('api')
    .build();

  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'ShuleNet API documentation',
  };
  const document = SwaggerModule.createDocument(app, configOptions);
  SwaggerModule.setup('api', app, document, customOptions);
}
