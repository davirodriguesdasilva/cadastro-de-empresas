import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../../../shared/models/login.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    baseUrl = 'http://localhost:3000/usuario'

    constructor(private http: HttpClient) { }

    login(usuario: LoginModel): Observable<{ token: string }> {
        return this.http.post<{ token: string }>(`${this.baseUrl}/login`, usuario);
    }
}
