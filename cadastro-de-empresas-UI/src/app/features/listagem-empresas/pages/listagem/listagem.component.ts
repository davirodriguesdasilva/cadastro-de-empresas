import { Component, ViewChild } from '@angular/core';
import { ListagemStore } from '../../store/listagem.store';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { EmpresaModel } from '../../../../shared/models/empresa.model';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmpresaDetalhesComponent } from '../../components/empresa-detalhes/empresa-detalhes.component';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class ListagemComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSize: number = 0;

  get empresas() {
    return this.store?.empresas$;
  };

  constructor(
    public store: ListagemStore,
    private dialog: MatDialog,
    private router: Router,
  ) { 
    this.store.obterEmpresas();
  }

  aplicarPaginacao(e: PageEvent) {
    const { pageIndex, pageSize } = this.paginator;
    this.pageSize = e.pageSize;

    this.store.alterarPaginacao(pageIndex, pageSize);
  }

  verDetalhes(empresa: EmpresaModel) {
    const modal = this.dialog.open(EmpresaDetalhesComponent);
    modal.componentInstance.empresaDetalhes = empresa;
  }

  deletar(id: string = '') {
    this.store.deletarEmpresa(id);
  }

  atualizar(empresa: EmpresaModel){

  }

  cadastrar() {
    this.router.navigate(['listagem/adicionar']);
  }
}
