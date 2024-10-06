import { Component, ViewChild } from '@angular/core';
import { ListagemStore } from '../../store/listagem.store';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class ListagemComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSize: number = 0;

  constructor(
    public store: ListagemStore,
    private router: Router,
  ) { 
    this.store.obterEmpresas();
  }

  aplicarPaginacao(e: PageEvent) {
    const { pageIndex, pageSize } = this.paginator;
    this.pageSize = e.pageSize;

    this.store.alterarPaginacao(pageIndex, pageSize);
  }

  cadastrar() {
    this.router.navigate(['listagem/adicionar']);
  }
}
