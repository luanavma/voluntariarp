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
  vagasFavoritas: Array<any>;

  constructor() {
    // Determine a saudação com base no horário atual
    const horaAtual = new Date().getHours();
    if (horaAtual < 12) {
      this.saudacao = 'Bom dia';
    } else if (horaAtual < 18) {
      this.saudacao = 'Boa tarde';
    } else {
      this.saudacao = 'Boa noite';
    }

    // Preencha as vagas recomendadas e favoritas com dados
    this.vagasRecomendadas = [
      { titulo: 'Vaga 1', local: 'Local 1' },
      { titulo: 'Vaga 2', local: 'Local 2' },
      // ...
    ];

    this.vagasFavoritas = [
      { titulo: 'Vaga Favorita 1', local: 'Local Favorito 1' },
      { titulo: 'Vaga Favorita 2', local: 'Local Favorito 2' },
      // ...
    ];
  }
}
