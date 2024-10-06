import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmpresaModel } from '../../../shared/models/empresa.model';
import { EmpresaListaModel } from '../../../shared/models/empresaLista.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ListagemService {
    baseUrl = 'http://localhost:3000/empresa'

    constructor(private http: HttpClient) { }

    listagem(pagina: number, quantidade: number): Observable<EmpresaListaModel> {
        return this.http.get<EmpresaListaModel>(`${this.baseUrl}/listagem?pagina=${pagina}&quantidade=${quantidade}`);
    }

    criar(empresa: EmpresaModel): Observable<{ mensagem: string }> {
        return this.http.post<{ mensagem: string }>(`${this.baseUrl}/criar`, empresa);
    }

    atualizar(id: string, empresa: EmpresaModel): Observable<{ mensagem: string }> {
        return this.http.put<{ mensagem: string }>(`${this.baseUrl}/atualizar/${id}`, empresa);
    }

    deletar(id: string): Observable<{ mensagem: string }> {
        return this.http.delete<{ mensagem: string }>(`${this.baseUrl}/deletar/${id}`);
    }
}
