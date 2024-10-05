import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';
import { EmpresaDto } from '../dtos/empresa.dto';

const camposTratados = {
    'empresas_cadastradas_cnpj_key': 'CNPJ',
};

@Injectable()
export class empresaRepository {
    constructor(private prisma: PrismaService) { }

    async criar(data: EmpresaDto) {
        try {
            await this.prisma.empresa.create({ data });

        } catch (error) {
            if (error.code === 'P2002') {
                throw new ConflictException(`O valor do campo '${camposTratados}' já está cadastrado e não pode ser duplicado.`);
            }
            throw error;
        }
    }

    async consultar(pagina: number, quantidade: number) {
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

    async consultarPorCampo(campo: string, valor: string | bigint) {
        return this.prisma.empresa.findFirst({
            where: { [campo]: valor },
        });
    }

    async atualizar(id: bigint, data: EmpresaDto) {
        try {
            await this.prisma.empresa.update({
                where: { id },
                data,
            });

        } catch (error) {
            if (error.code === 'P2002') {
                throw new ConflictException(`O valor do campo '${camposTratados}' já está cadastrado e não pode ser duplicado.`);
            }
            throw error;
        }
    }

    async deletarPorId(id: bigint) {
        return this.prisma.empresa.delete({ where: { id } });
    }
}
