import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BigIntInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map((data) => JSON.parse(JSON.stringify(data, this.replacer))),
        );
    }

    replacer(chave: any, valor: any) {
        return typeof valor === 'bigint' ? valor.toString() : valor;
    }
}
