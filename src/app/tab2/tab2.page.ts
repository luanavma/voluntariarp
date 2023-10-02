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
      {
        nome: 'Técnico de Informática',
        local: 'Canal Informática',
        tipo: 'Presencial - 1h/semanal',
        logoEmpresa: 'assets/icon/logo1.png',
        favorito: false,
      },
      {
        nome: 'Suporte de Sistemas',
        local: 'Universidade',
        tipo: 'Presencial - 1h/semanal',
        logoEmpresa: 'assets/icon/logo2.png',
        favorito: false,
      },
      {
        nome: 'Monitor de Informática',
        local: 'Escola Pública',
        tipo: 'Presencial - 1h/semanal',
        logoEmpresa: 'assets/icon/logo3.png',
        favorito: false,
      },
      {
        nome: 'Editor de Vídeos',
        local: 'Comunidade Local',
        tipo: 'Presencial - 1h/semanal',
        logoEmpresa: 'assets/icon/logo4.png',
        favorito: false,
      },
    ];
  }
}
