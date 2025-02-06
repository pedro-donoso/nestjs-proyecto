import { Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as serveStatic from 'serve-static'; // Cambia aquí

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Servir archivos estáticos desde el directorio 'public'
  app.use(serveStatic(join(__dirname, '..', 'public')));

  await app.listen(3000);
}
bootstrap();