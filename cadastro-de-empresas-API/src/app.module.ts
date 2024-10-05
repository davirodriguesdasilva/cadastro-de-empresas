import { Module } from '@nestjs/common';
import { EmpresaModule } from './modules/empresa/empresa.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { BigIntInterceptor } from './shared/interceptor/BigIntInterceptor';
import { UsuarioModule } from './modules/usuario/usuario.module';

@Module({
  imports: [EmpresaModule, UsuarioModule],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: BigIntInterceptor,
    }
  ],
})
export class AppModule {}
