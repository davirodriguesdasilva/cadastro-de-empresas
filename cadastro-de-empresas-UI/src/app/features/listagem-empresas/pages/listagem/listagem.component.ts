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

  constructor(
    public store: ListagemStore,
    private router: Router,
  ) { 
    this.store.obterEmpresas();
  }

  aplicarPaginacao(e: PageEvent) {
    const { pageIndex } = this.paginator;

    this.store.alterarPaginacao(pageIndex);
  }

  cadastrar() {
    this.router.navigate(['listagem/adicionar']);
  }
}
