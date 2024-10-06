import { Component } from '@angular/core';
import { AppStore } from './shared/store/app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(public store: AppStore) {
    this.store.verificaLogado();
  }
}
