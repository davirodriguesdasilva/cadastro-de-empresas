import { Injectable, NotFoundException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { TOKEN_TESTE } from 'src/shared/authGuard/token';

@Injectable()
export class UsuarioService {

    constructor() { }

    async login(login: LoginDto) {
        if (login.usuario === 'admin' && login.senha === 'admin') {
            const token = TOKEN_TESTE; 
            return { token };
        }

        throw new NotFoundException('Usuário não encontrado.');
    }
}
