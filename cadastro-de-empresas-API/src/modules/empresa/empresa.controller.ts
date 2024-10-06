import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaDto } from './dtos/empresa.dto';
import { AuthGuard } from 'src/shared/authGuard/auth.guard';

@Controller('empresa')
// @UseGuards(AuthGuard)
export class EmpresaController {

    constructor(private empresaService: EmpresaService) { }

    @Get('listagem')
    async listagem(
        @Query('pagina') pagina: number = 1,
        @Query('quantidade') quantidade: number = 5
    ) {
        return await this.empresaService.listagem(pagina, quantidade);
    }

    @Post('criar')
    async criar(@Body() empresa: EmpresaDto) {
        return await this.empresaService.criar(empresa);
    }

    @Put('atualizar/:id')
    async atualizar(@Param('id') id: bigint, @Body() updateEmpresaDto: EmpresaDto) {
        return await this.empresaService.atualizar(id, updateEmpresaDto);
    }

    @Delete('deletar/:id')
    async deletar(@Param('id') id: bigint) {
        return await this.empresaService.deletar(id);
    }
}
