import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppStore } from '../store/app.store';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private store: AppStore) { }

    canActivate(): Observable<boolean> {

        if (this.store.obterToken()) {
            return of(true);
        } else {
            this.router.navigate(['/login']);
            return of(false);
        }
    }
}
