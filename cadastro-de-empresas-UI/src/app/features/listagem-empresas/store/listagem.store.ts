import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store"
import { firstValueFrom, Observable } from "rxjs";
import { EmpresaModel } from "../../../shared/models/empresa.model";
import { ListagemService } from "../service/listagem.service";
import { ToastrService } from "ngx-toastr";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

export interface ListagemState {
    empresas: EmpresaModel[]
    total: number,
    pagina: number,
    quantidade: number
}

export const initialState: ListagemState = {
    empresas: [],
    total: 0,
    pagina: 1,
    quantidade: 5
};

@Injectable()
export class ListagemStore extends ComponentStore<ListagemState> {

    readonly empresas$: Observable<EmpresaModel[]> = this.select(state => state.empresas);
    readonly total$: Observable<number> = this.select(state => state.total);
    readonly pagina$: Observable<number> = this.select(state => state.pagina);
    readonly quantidade$: Observable<number> = this.select(state => state.quantidade);

    constructor(
        private listagemService: ListagemService,
        private toastr: ToastrService,
        private router: Router
    ) {
        super(initialState);
    }

    public obterEmpresas() {
        const { pagina, quantidade } = this.get();

        this.listagemService.listagem(pagina, quantidade).subscribe({
            next: (res) => this.patchState(() => ({ empresas: [...res.empresas], total: res.total })),
            error: () => this.toastr.error('Erro ao carregar listagem.')
        })
    }

    public alterarPaginacao(pagina: number, quantidade: number) {
        let pageIndex = pagina + 1
        this.patchState((s) => ({ pagina: pageIndex, quantidade }));
        this.obterEmpresas();
    }

    public deletarEmpresa(id: string) {
        this.listagemService.deletar(id).subscribe({
            next: (res) => {
                this.toastr.success(res.mensagem);
                this.obterEmpresas();
            },
            error: () => this.toastr.error('Erro ao excluir empresa.')
        })
    }

    cadastrarEmpresa(empresa: EmpresaModel) {
        this.listagemService.criar(empresa).subscribe({
            next: (res) => {
                this.toastr.success(res.mensagem);
                this.irParaListagem();
            },
            error: (e: HttpErrorResponse) => this.toastr.error(e.error.message)
        })
    }

    public irParaListagem(): void{
        this.router.navigate(['/listagem']);
    }
}