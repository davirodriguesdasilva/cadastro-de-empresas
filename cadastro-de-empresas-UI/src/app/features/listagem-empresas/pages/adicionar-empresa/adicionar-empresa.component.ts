import { Component, inject, Input } from '@angular/core';
import { EmpresaModel } from '../../../../shared/models/empresa.model';
import { FormBuilder, Validators } from '@angular/forms';
import { ListagemStore } from '../../store/listagem.store';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-adicionar-empresa',
  templateUrl: './adicionar-empresa.component.html',
  styleUrl: './adicionar-empresa.component.scss'
})
export class AdicionarEmpresaComponent {
  private formBuilder = inject(FormBuilder);
  @Input() dadosAtualizarEmpresa?: EmpresaModel;

  cadastroEmpresa = this.formBuilder.group({
    nome: ['', Validators.required],
    cnpj: ['', Validators.required],
    email: ['', Validators.required],
    endereco: ['', Validators.required],
    telefone: ['', Validators.required],
  });

  constructor(private store: ListagemStore, private dialog: MatDialog) { }

  ngOnInit(): void {
    if (this.dadosAtualizarEmpresa) {
      const dadosAjustados = {
        ...this.dadosAtualizarEmpresa,
        cnpj: this.dadosAtualizarEmpresa.cnpj.toString(),
        telefone: this.dadosAtualizarEmpresa.telefone.toString(),
      };
      this.cadastroEmpresa.patchValue(dadosAjustados);
    }
  }

  cadastrar() {
    const model: EmpresaModel = {
      nome: this.cadastroEmpresa.value.nome?.toString() || '',
      cnpj: this.cadastroEmpresa.value.cnpj ? parseInt(this.cadastroEmpresa.value.cnpj, 10) : 0,
      email: this.cadastroEmpresa.value.email?.toString() || '',
      endereco: this.cadastroEmpresa.value.endereco?.toString() || '',
      telefone: this.cadastroEmpresa.value.telefone ? parseInt(this.cadastroEmpresa.value.telefone, 10) : 0
    };

    this.dadosAtualizarEmpresa ? this.store.atualizarEmpresa(this.dadosAtualizarEmpresa.id, model) : this.store.cadastrarEmpresa(model);
  }

  voltar() {
    this.dadosAtualizarEmpresa ? this.dialog.closeAll() : this.store.irParaListagem();
  }
}
