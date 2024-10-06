import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../../../shared/models/login.model';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private http: HttpClient) { }

    login(usuario: LoginModel) {
        return this.http.post<any>('http://localhost:3000/usuario/login', usuario);
    }
}
