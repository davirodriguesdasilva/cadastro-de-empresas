import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemEmpresasRoutingModule } from './listagem-empresas-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { AdicionarEmpresaComponent } from './pages/adicionar-empresa/adicionar-empresa.component';
import { ListagemStore } from './store/listagem.store';
import { EmpresaDetalhesComponent } from './components/empresa-detalhes/empresa-detalhes.component';
import { TabelaEmpresasComponent } from './components/tabela-empresas/tabela-empresas.component';

@NgModule({
  declarations: [
    ListagemComponent,
    AdicionarEmpresaComponent,
    EmpresaDetalhesComponent,
    TabelaEmpresasComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ListagemEmpresasRoutingModule,
  ],
  providers: [ListagemStore]
})
export class ListagemEmpresasModule { }
