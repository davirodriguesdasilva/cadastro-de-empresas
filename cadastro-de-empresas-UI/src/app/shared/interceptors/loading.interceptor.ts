import { finalize } from 'rxjs/operators';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AppStore } from '../store/app.store';

@Injectable()

export class LoadingInterceptor implements HttpInterceptor {
  count = 0;

  constructor(private store: AppStore) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.count++;
    this.store.atualizarStatusCarregando(true)

    return next.handle(req)
      .pipe(finalize(() => {
        this.count--;
        if (this.count == 0) this.store.atualizarStatusCarregando(false);
      }));
  }
}
