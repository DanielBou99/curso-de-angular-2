import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  public listaComidas: Array<{ comida: string }> = [
    { comida: 'X-Salada' },
    { comida: 'X-Bacon' },
    { comida: 'Coxinha' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
