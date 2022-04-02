import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'Item 1', idade: 29 },
    { nome: 'Item 2', idade: 23 },
    { nome: 'Item 3', idade: 22 },
  ];

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.condition = !this.condition;
    }, 2000);
  }

  public onClick() {
    this.conditionClick = !this.conditionClick;
  }

  public onClickAddList() {
    this.list.push({ nome: 'Nay', idade: 31 });
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1);
  }
}
