import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss'],
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = true;
  public tamanho: string = '20px';
  public backgroundColor: string = 'red';
  public nome: string = '';
  public list: Array<{ nome: string }> = [{ nome: 'Daniel' }];

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.valor = !this.valor;
    }, 1000);
    setInterval(() => {
      if (this.tamanho == '20px') {
        this.tamanho = '100px';
      } else {
        this.tamanho = '20px';
      }
    }, 1000);
  }

  public salvar() {
    this.list.push({ nome: this.nome });
    this.nome = '';
  }
}
