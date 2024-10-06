import { Component } from '@angular/core';
import { ListagemStore } from '../../store/listagem.store';
import { EmpresaModel } from '../../../../shared/models/empresa.model';

@Component({
  selector: 'app-tabela-empresas',
  templateUrl: './tabela-empresas.component.html',
  styleUrl: './tabela-empresas.component.scss'
})
export class TabelaEmpresasComponent {

  constructor(
    public store: ListagemStore,
  ) {
    this.store.obterEmpresas();
  }

  verDetalhes(empresa: EmpresaModel) {
    this.store.verDetalhes(empresa);
  }

  atualizar(empresa: EmpresaModel) {
    this.store.atualizar(empresa);
  }

  deletar(id: string = '') {
    this.store.deletarEmpresa(id);
  }
}
