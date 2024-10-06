import { Inject, Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store"
import { Observable } from "rxjs";
import { EmpresaModel } from "../../../shared/models/empresa.model";
import { ListagemService } from "../service/listagem.service";
import { ToastrService } from "ngx-toastr";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { EmpresaDetalhesComponent } from "../components/empresa-detalhes/empresa-detalhes.component";
import { AdicionarEmpresaComponent } from "../pages/adicionar-empresa/adicionar-empresa.component";

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
        private router: Router,
        @Inject(MatDialog) private dialog: MatDialog
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

    public alterarPaginacao(pagina: number) {
        let pageIndex = pagina + 1
        this.patchState((s) => ({ pagina: pageIndex }));
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

    public cadastrarEmpresa(empresa: EmpresaModel) {
        this.listagemService.criar(empresa).subscribe({
            next: (res) => {
                this.toastr.success(res.mensagem);
                this.irParaListagem();
            },
            error: (e: HttpErrorResponse) => this.toastr.error(e.error.message)
        })
    }

    public atualizarEmpresa(id: string = '', empresa: EmpresaModel) {
        this.listagemService.atualizar(id, empresa).subscribe({
            next: (res) => {
                this.toastr.success(res.mensagem);
                this.dialog.closeAll();
                this.obterEmpresas();
            },
            error: (e: HttpErrorResponse) => this.toastr.error(e.error.message)
        })
    }

    public verDetalhes(empresa: EmpresaModel) {
        const modal = this.dialog.open(EmpresaDetalhesComponent);
        modal.componentInstance.empresaDetalhes = empresa;
    }

    public atualizar(empresa: EmpresaModel) {
        const modal = this.dialog.open(AdicionarEmpresaComponent);
        modal.componentInstance.dadosAtualizarEmpresa = empresa;
    }

    public irParaListagem(): void {
        this.router.navigate(['/listagem']);
    }
}