import { Injectable, NotFoundException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class UsuarioService {

    constructor() { }

    async login(login: LoginDto) {
        if (login.usuario === 'admin' && login.senha === 'admin') {
            const token = 'MeuToken123'; 
            return { token };
        }

        throw new NotFoundException('Usuário não encontrado.');
    }
}
