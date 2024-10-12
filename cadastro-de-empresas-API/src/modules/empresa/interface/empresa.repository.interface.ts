import { Empresa } from "../model/empresa";
import { EmpresaDto } from "../model/empresa.dto";

export interface IEmpresaRepository {
    criar(data: EmpresaDto): Promise<Empresa>;
    consultarPaginado(pagina: number, quantidade: number): Promise<{
        empresas: Empresa[];
        total: number;
        pagina: number;
        quantidade: number;
    }>;
    atualizar(id: bigint, data: EmpresaDto): Promise<Empresa>;
    deletarPorId(id: bigint): Promise<Empresa>;
}
