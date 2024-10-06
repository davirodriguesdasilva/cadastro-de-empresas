import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';


const declarationExport = [
  NavMenuComponent,
  FooterComponent,
]

const importExport = [
  MatButtonModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatMenuModule,
  MatPaginatorModule,
  MatDialogModule,
  ReactiveFormsModule,
  FormsModule,
  MatCardModule,
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
