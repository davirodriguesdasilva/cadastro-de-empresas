import { ConflictException, HttpException, HttpStatus, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { EmpresaDto } from './model/empresa.dto';
import { validarEmail } from 'src/shared/functions/validar-email';
import { validarCNPJ } from 'src/shared/functions/validar-cnpj';
import { IEmpresaRepository } from './interface/empresa.repository.interface';
import { Empresa } from './model/empresa';

const camposTratados = {
    'empresas_cadastradas_cnpj_key': 'CNPJ',
};

@Injectable()
export class EmpresaService {

    constructor(@Inject('IEmpresaRepository') private empresaRepository: IEmpresaRepository,) { }

    async listagem(pagina: number, quantidade: number): Promise<{
        empresas: Empresa[];
        total: number;
        pagina: number;
        quantidade: number;
    }> {
        if (!pagina || !quantidade)
            throw new HttpException('Pagina ou quantidade inválida.', HttpStatus.BAD_REQUEST);

        return await this.empresaRepository.consultarPaginado(pagina, quantidade);
    }

    async criar(empresa: EmpresaDto): Promise<{ mensagem: String; }> {
        if (!validarEmail(empresa.email))
            throw new HttpException('E-mail inválido.', HttpStatus.BAD_REQUEST);

        if (!validarCNPJ(empresa.cnpj))
            throw new HttpException('CNPJ inválido.', HttpStatus.BAD_REQUEST);

        try {
            await this.empresaRepository.criar(empresa);
            return { mensagem: 'Empresa criada com sucesso!' };

        } catch (error) {
            if (error.code === 'P2002') {
                throw new ConflictException(`O valor do campo '${camposTratados[error.meta.target]}' já está cadastrado e não pode ser duplicado.`);
            }
            throw error;
        }
    }

    async atualizar(id: bigint, update: EmpresaDto): Promise<{ mensagem: String; }> {
        if (!validarEmail(update.email))
            throw new HttpException('E-mail inválido.', HttpStatus.BAD_REQUEST);

        if (!validarCNPJ(update.cnpj))
            throw new HttpException('CNPJ inválido.', HttpStatus.BAD_REQUEST);

        try {
            await this.empresaRepository.atualizar(id, update);
            return { mensagem: 'Empresa atualizada com sucesso!' };

        } catch (error) {
            if (error.code === 'P2002') {
                throw new ConflictException(`O valor do campo '${camposTratados[error.meta.target]}' já está cadastrado e não pode ser duplicado.`);
            }
            if (error.code === 'P2025') {
                throw new NotFoundException('Empresa com o ID fornecido não foi encontrada.');
            }
            throw error;
        }
    }

    async deletar(id: bigint): Promise<{ mensagem: String; }> {
        try {
            await this.empresaRepository.deletarPorId(id);
            return { mensagem: 'Empresa excluída com sucesso!' };

        } catch (error) {
            if (error.code === 'P2025') {
                throw new NotFoundException('Empresa com o ID fornecido não foi encontrada.');
            }
            throw error;
        }
    }
}
