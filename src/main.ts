import { Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { serveStatic } from 'serve-static';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Servir archivos estáticos desde el directorio 'public'
  app.use(serveStatic(join(__dirname, '..', 'public')));

  await app.listen(3000);
}
bootstrap();