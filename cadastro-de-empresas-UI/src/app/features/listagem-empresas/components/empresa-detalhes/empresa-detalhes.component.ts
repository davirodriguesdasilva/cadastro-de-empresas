import { Component, Input } from '@angular/core';
import { EmpresaModel } from '../../../../shared/models/empresa.model';

@Component({
  selector: 'app-empresa-detalhes',
  templateUrl: './empresa-detalhes.component.html',
  styleUrl: './empresa-detalhes.component.scss'
})
export class EmpresaDetalhesComponent {
  @Input() empresaDetalhes!: EmpresaModel;
}
