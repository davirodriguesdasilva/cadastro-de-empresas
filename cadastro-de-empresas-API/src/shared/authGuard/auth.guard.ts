import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { TOKEN_TESTE } from './token';

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request: Request = context.switchToHttp().getRequest();

        const token = request.headers['authorization'];

        if (!token || token !== `Bearer ${TOKEN_TESTE}`) {
            throw new UnauthorizedException('Token inválido.');
        }

        return true;
    }
}
