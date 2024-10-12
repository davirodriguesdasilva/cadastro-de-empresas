import { Module } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { EmpresaRepository } from './repositories/empresa.repository';
import { PrismaService } from 'src/shared/prisma.service';

@Module({
  providers: [
    EmpresaService, 
    PrismaService,
    {
      provide: 'IEmpresaRepository',
      useClass: EmpresaRepository,
    },
  ],
  controllers: [EmpresaController]
})
export class EmpresaModule {}
