import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';
import { EmpresaDto } from '../model/empresa.dto';
import { IEmpresaRepository } from '../interface/empresa.repository.interface';
import { Empresa } from '../model/empresa';

@Injectable()
export class EmpresaRepository implements IEmpresaRepository {
    constructor(private prisma: PrismaService) { }

    public async criar(data: EmpresaDto): Promise<Empresa> {
        return await this.prisma.empresa.create({ data });
    }

    public async consultarPaginado(pagina: number, quantidade: number): Promise<{
        empresas: Empresa[];
        total: number;
        pagina: number;
        quantidade: number;
    }> {
        const skip = (pagina - 1) * quantidade;
        const total = await this.prisma.empresa.count();

        const empresas = await this.prisma.empresa.findMany({
            skip,
            take: +quantidade,
        });

        return {
            empresas,
            total,
            pagina,
            quantidade,
        };
    }

    public async atualizar(id: bigint, data: EmpresaDto): Promise<Empresa> {
        return await this.prisma.empresa.update({
            where: { id },
            data,
        });
    }

    public async deletarPorId(id: bigint): Promise<Empresa> {
        return await this.prisma.empresa.delete({ where: { id } });
    }
}
