import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { LoginService } from './service/login.service';
import { ToastrService } from 'ngx-toastr';
import { AppStore } from '../../shared/store/app.store';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private toastr: ToastrService,
    private store: AppStore
  ) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });

    this.store.salvarToken(null);
  }

  entrar() {
    const { usuario, senha } = this.loginForm.value;
    this.loginService.login({ usuario, senha }).subscribe({
      next: (res) => {
        this.store.entrarConta(res.token);
      },
      error: () => { this.toastr.error('Usuário não encontrado.'); },
    })
  }
}
