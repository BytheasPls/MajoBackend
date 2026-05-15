import { Module } from '@nestjs/common';
import { ComisionController } from './comision.controller';
import { ComisionService } from './comision.service';

@Module({
  controllers: [ComisionController],
  providers: [ComisionService]
})
export class ComisionModule {}
