import { Module } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { empresaRepository } from './repositories/empresa.repository';
import { PrismaService } from 'src/shared/prisma.service';

@Module({
  providers: [EmpresaService, empresaRepository, PrismaService],
  controllers: [EmpresaController]
})
export class EmpresaModule {}
