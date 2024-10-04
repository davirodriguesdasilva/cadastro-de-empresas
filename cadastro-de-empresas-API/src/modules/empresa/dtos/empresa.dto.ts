import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class EmpresaDto {
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsInt()
    cnpj: number;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    endereco: string;

    @IsNotEmpty()
    @IsInt()
    telefone: number;
}