import { Component } from '@angular/core';
import { AppStore } from '../../store/app.store';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss'
})
export class NavMenuComponent {

  constructor(private store: AppStore) { }

  sair(): void {
    this.store.sairConta();
  }
}
