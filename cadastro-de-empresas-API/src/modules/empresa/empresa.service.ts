import { ConflictException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { empresaRepository } from './repositories/empresa.repository';
import { EmpresaDto } from './dtos/empresa.dto';
import { validarEmail } from 'src/shared/functions/validar-email';
import { validarCNPJ } from 'src/shared/functions/validar-cnpj';

@Injectable()
export class EmpresaService {

    constructor(private empresaRepository: empresaRepository) { }

    async listagem(pagina: number, quantidade: number) {
        if (!pagina || !quantidade)
            throw new HttpException('Pagina ou quantidade inválida.', HttpStatus.BAD_REQUEST);

        return await this.empresaRepository.consultar(pagina, quantidade);
    }

    async criar(empresa: EmpresaDto) {
        if (!validarEmail(empresa.email))
            throw new HttpException('E-mail inválido.', HttpStatus.BAD_REQUEST);

        if (!validarCNPJ(empresa.cnpj))
            throw new HttpException('CNPJ inválido.', HttpStatus.BAD_REQUEST);

        await this.empresaRepository.criar(empresa);

        return { mensagem: 'Empresa criada com sucesso!' };
    }

    async atualizar(id: bigint, update: EmpresaDto) {
        if (!validarEmail(update.email))
            throw new HttpException('E-mail inválido.', HttpStatus.BAD_REQUEST);

        if (!validarCNPJ(update.cnpj))
            throw new HttpException('CNPJ inválido.', HttpStatus.BAD_REQUEST);

        const idExistente = await this.empresaRepository.consultarPorCampo('id', id);

        if (!idExistente)
            throw new NotFoundException('Empresa com o ID fornecido não foi encontrada.');

        await this.empresaRepository.atualizar(id, update);

        return { mensagem: 'Empresa atualizada com sucesso!' };
    }

    async deletar(id: bigint) {
        const idExistente = await this.empresaRepository.consultarPorCampo('id', id)

        if (!idExistente)
            throw new NotFoundException('Id não encontrado.');

        await this.empresaRepository.deletarPorId(id);

        return { mensagem: 'Empresa deletada com sucesso!' };
    }
}
