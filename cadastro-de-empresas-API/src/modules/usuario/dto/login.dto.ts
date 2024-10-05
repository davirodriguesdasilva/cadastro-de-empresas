import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LoginDto {
    @ApiProperty({
        description: 'Usuário de acesso.',
        example: 'admin',
    })
    @IsNotEmpty({ message: 'O usuario não pode ser vazio.' })
    @IsString()
    usuario: string;

    @ApiProperty({
        description: 'Senha de acesso.',
        example: 'admin',
    })
    @IsNotEmpty({ message: 'A senha não pode ser vazio.' })
    @IsString()
    senha: string;
}
