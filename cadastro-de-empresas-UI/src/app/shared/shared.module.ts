import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';


const declarationExport = [
  NavMenuComponent,
] 

const importExport = [
  MatButtonModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatInputModule,
  MatIconModule,
  MatMenuModule,
  MatPaginatorModule,
  MatDialogModule,
  ReactiveFormsModule,
  FormsModule,
  MatCardModule,
  MatStepperModule,
]

@NgModule({
  declarations: [
    ...declarationExport
  ],
  imports: [
    CommonModule,
    ...importExport
  ],
  exports: [
    ...declarationExport,
    ...importExport
  ]
})
export class SharedModule { }
