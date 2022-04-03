import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  @Output() public enviarDados = new EventEmitter();

  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'Daniel', idade: 80 },
    { nome: 'Guilherme', idade: 70 },
    { nome: 'Carlos', idade: 50 },
  ];

  constructor() {}

  ngOnInit(): void {}

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }
}
