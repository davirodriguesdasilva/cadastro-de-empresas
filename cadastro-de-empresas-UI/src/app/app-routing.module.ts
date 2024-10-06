import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { AuthGuard } from './shared/authGuard/authGuard';

export const routes: Routes = [
    {
        path: 'listagem',
        loadChildren: () => import('./features/listagem-empresas/listagem-empresas.module').then(m => m.ListagemEmpresasModule),
        canActivate: [AuthGuard]
    },
    {
        path: "login",
        component: LoginComponent,
    },
    { path: '**', redirectTo: '/listagem' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }