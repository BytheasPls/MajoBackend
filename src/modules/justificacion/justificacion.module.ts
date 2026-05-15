import { Module } from '@nestjs/common';
import { JustificacionController } from './justificacion.controller';
import { JustificacionService } from './justificacion.service';

@Module({
  controllers: [JustificacionController],
  providers: [JustificacionService]
})
export class JustificacionModule {}
