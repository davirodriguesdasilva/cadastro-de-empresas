import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ComponentStore } from "@ngrx/component-store"
import { Observable } from "rxjs";

export const NOME_PROPRIEDADE_TOKEN = 'authToken'

export interface AppState {
    logado: boolean
    carregando: boolean
}

export const initialState: AppState = {
    logado: false,
    carregando: false
};

@Injectable()
export class AppStore extends ComponentStore<AppState> {

    readonly logado$: Observable<boolean> = this.select(state => state.logado);
    readonly carregando$: Observable<boolean> = this.select(state => state.carregando);

    constructor(private router: Router) {
        super(initialState);
    }

    public atualizarStatusCarregando(status: boolean): void {
        this.setState((state) => ({
            ...state,
            carregando: status
        }));
    }

    public entrarConta(token: string): void {
        this.salvarToken(token);
        this.router.navigate(['/home']);
    }

    public sairConta(): void {
        this.salvarToken(null);
        this.router.navigate(['/login']);
    }

    public verificaLogado() {
        if (this.obterToken())
            this.setState((state) => ({ ...state, logado: true }));
    }

    public salvarToken(token: string | null): void {
        if (token) {
            this.setState((state) => ({ ...state, logado: true }));
            localStorage.setItem(NOME_PROPRIEDADE_TOKEN, token);
        } else {
            this.setState((state) => ({ ...state, logado: false }));
            localStorage.removeItem(NOME_PROPRIEDADE_TOKEN);
        }
    }

    public obterToken(): string | null {
        return localStorage.getItem(NOME_PROPRIEDADE_TOKEN);
    }
}