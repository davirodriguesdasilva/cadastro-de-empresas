import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma.service';
import { EmpresaDto } from '../dtos/empresa.dto';
import { Empresa } from '../entities/empresa.entity';

@Injectable()
export class empresaRepository {
    constructor(private prisma: PrismaService) { }

    async criar(data: EmpresaDto): Promise<Empresa> {
        return this.prisma.empresa.create({ data });
    }

    async consultar(): Promise<Empresa[]> {
        return this.prisma.empresa.findMany();
    }

    async apagar(cnpj: number): Promise<void> {
        await this.prisma.empresa.delete({ where: { cnpj } });
    }
}
