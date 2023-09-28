import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  vagasFavoritadas: Array<any>;

  constructor() {
    this.vagasFavoritadas = [
      { nome: 'Vaga Favorita 1', empresa: 'Empresa 1' },
      { nome: 'Vaga Favorita 2', empresa: 'Empresa 2' },
    ];
  }
}
