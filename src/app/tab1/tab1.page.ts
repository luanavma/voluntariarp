import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  saudacao: string;
  vagasRecomendadas: Array<any>;

  constructor() {
    const horaAtual = new Date().getHours();
    if (horaAtual < 12) {
      this.saudacao = 'Bom dia';
    } else if (horaAtual < 18) {
      this.saudacao = 'Boa tarde';
    } else {
      this.saudacao = 'Boa noite';
    }

    this.vagasRecomendadas = [
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
