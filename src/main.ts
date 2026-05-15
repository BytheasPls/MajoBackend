import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Prefijo global para las rutas (Ej: http://localhost:4000/api/auth/login)
  app.setGlobalPrefix('api');

  // 2. Habilitar CORS para que Next.js pueda hacer peticiones
  app.enableCors({
    origin: '*', // En producción cambien esto por la URL de su Vercel
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // 3. Configurar validaciones automáticas globales para los DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Descarta campos que no estén en el DTO
      forbidNonWhitelisted: true, // Lanza error si envían campos no permitidos
      transform: true, // Transforma los tipos de datos automáticamente
    }),
  );

  // Cambiamos el puerto al 4000 para que no choque con Next.js (puerto 3000)
  await app.listen(4000);
  console.log(`🚀 Backend corriendo en: http://localhost:4000/api`);
}
bootstrap();