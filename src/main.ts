import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express'; // Importar Express

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule); // Usando NestExpressApplication

  app.enableCors();
  app.useStaticAssets('uploads', { prefix: '/uploads' });

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('July blog')
    .setDescription('The July Blog REST API Documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
