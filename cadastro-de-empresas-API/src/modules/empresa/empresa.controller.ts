import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaDto } from './model/empresa.dto';
import { AuthGuard } from 'src/shared/authGuard/auth.guard';
import { Empresa } from './model/empresa';

@Controller('empresa')
@UseGuards(AuthGuard)
export class EmpresaController {

    constructor(private empresaService: EmpresaService) { }

    @Get()
    async listagem(
        @Query('pagina') pagina: number = 1,
        @Query('quantidade') quantidade: number = 5
    ): Promise<{
        empresas: Empresa[];
        total: number;
        pagina: number;
        quantidade: number;
    }> {
        return await this.empresaService.listagem(pagina, quantidade);
    }

    @Post()
    async criar(@Body() empresa: EmpresaDto): Promise<{ mensagem: String; }> {
        return await this.empresaService.criar(empresa);
    }

    @Put('/:id')
    async atualizar(@Param('id') id: bigint, @Body() updateEmpresaDto: EmpresaDto): Promise<{ mensagem: String; }> {
        return await this.empresaService.atualizar(id, updateEmpresaDto);
    }

    @Delete('/:id')
    async deletar(@Param('id') id: bigint): Promise<{ mensagem: String; }> {
        return await this.empresaService.deletar(id);
    }
}
