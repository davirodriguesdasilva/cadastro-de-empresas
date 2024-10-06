import { EmpresaModel } from "./empresa.model"

export interface EmpresaListaModel {
    empresas: EmpresaModel[]
    total: number,
    pagina: number,
    quantidade: number
}