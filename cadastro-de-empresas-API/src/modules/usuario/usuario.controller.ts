import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { LoginDto } from './dto/login.dto';

@Controller('usuario')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService) { }

    @Post('login')
    async login(@Body() usuario: LoginDto) {
        return await this.usuarioService.login(usuario);
    }
}
