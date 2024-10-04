import { Controller, Get, Post } from '@nestjs/common';
import { EmpresaService } from './empresa.service';

@Controller('empresa')
export class EmpresaController {

    constructor(private empresaService: EmpresaService){}

    @Get('listagem')
    listagem(){
        return this.empresaService.listagem();
    }

    @Post('criar')
    criar(){
        return this.empresaService.criar();
    }
}
