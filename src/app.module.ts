import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { AttendanceModule } from './modules/attendance/attendance.module';
import { AsistenciaModule } from './modules/asistencia/asistencia.module';
import { CommisionModule } from './modules/commision/commision.module';
import { ComicionModule } from './modules/comicion/comicion.module';
import { ComisionModule } from './modules/comision/comision.module';
import { JustificcacionModule } from './modules/justificcacion/justificcacion.module';
import { JustificacionModule } from './modules/justificacion/justificacion.module';
import { TareasModule } from './modules/tareas/tareas.module';

@Module({
  imports: [AuthModule, UsersModule, AttendanceModule, AsistenciaModule, CommisionModule, ComicionModule, ComisionModule, JustificcacionModule, JustificacionModule, TareasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
