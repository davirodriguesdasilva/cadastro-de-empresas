import { Component, inject, Input } from '@angular/core';
import { EmpresaModel } from '../../../../shared/models/empresa.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { validarCNPJ } from '../../../../shared/functions/validar-cnpj';
import { ListagemStore } from '../../store/listagem.store';

@Component({
  selector: 'app-adicionar-empresa',
  templateUrl: './adicionar-empresa.component.html',
  styleUrl: './adicionar-empresa.component.scss'
})
export class AdicionarEmpresaComponent {
  private formBuilder = inject(FormBuilder);

  constructor(private store: ListagemStore) { }

  cadastroEmpresa = this.formBuilder.group({
    nome: ['', Validators.required],
    cnpj: ['', Validators.required],
    email: ['', Validators.required],
    endereco: ['', Validators.required],
    telefone: ['', Validators.required],
  });

  cadastrar() {
    const model: EmpresaModel = {
      nome: this.cadastroEmpresa.value.nome?.toString() || '',
      cnpj: this.cadastroEmpresa.value.cnpj ? parseInt(this.cadastroEmpresa.value.cnpj, 10) : 0,
      email: this.cadastroEmpresa.value.email?.toString() || '',
      endereco: this.cadastroEmpresa.value.endereco?.toString() || '',
      telefone: this.cadastroEmpresa.value.telefone ? parseInt(this.cadastroEmpresa.value.telefone, 10) : 0
    };

    this.store.cadastrarEmpresa(model);
  }

  voltar() {
    this.store.irParaListagem();
  }
}
