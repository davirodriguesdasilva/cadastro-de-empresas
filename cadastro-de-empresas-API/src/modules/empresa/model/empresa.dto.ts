import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class EmpresaDto {
  @ApiProperty({
    description: 'Nome da empresa',
    example: 'Empresa Exemplo',
  })
  @IsNotEmpty({ message: 'O nome não pode ser vazio.' })
  @IsString()
  nome: string;

  @ApiProperty({
    description: 'CNPJ da empresa',
    example: 34978472000135,
  })

  @IsNumber({}, { message: 'O cnpj não pode ser vazio.' })
  @Type(() => Number)
  cnpj: number;

  @ApiProperty({
    description: 'E-mail de contato da empresa',
    example: 'contato@empresa.com',
  })
  @IsNotEmpty({ message: 'O e-mail não pode ser vazio.' })
  @IsString()
  email: string;

  @ApiProperty({
    description: 'Endereço da empresa',
    example: 'Rua Exemplo, 123, Cidade',
  })
  @IsNotEmpty({ message: 'O endereço não pode ser vazio.' })
  @IsString()
  endereco: string;

  @ApiProperty({
    description: 'Telefone da empresa',
    example: 11987654321,
  })

  @IsNumber({}, { message: 'O número não pode ser vazio.' })
  @Type(() => Number)
  telefone: number;
}
