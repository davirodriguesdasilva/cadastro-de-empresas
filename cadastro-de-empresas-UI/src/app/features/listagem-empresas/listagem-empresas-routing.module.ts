import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { AdicionarEmpresaComponent } from './pages/adicionar-empresa/adicionar-empresa.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListagemComponent
  },
  {
    path: "adicionar",
    component: AdicionarEmpresaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListagemEmpresasRoutingModule { }
