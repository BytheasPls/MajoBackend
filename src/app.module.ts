import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

import { JustificacionModule } from './modules/justificacion/justificacion.module';
import { TareasModule } from './modules/tareas/tareas.module';

@Module({
  imports: [AuthModule, UsersModule,  JustificacionModule, TareasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
