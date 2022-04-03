import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public value: number = 1;
  public button: boolean = true;
  public addValue: number = 10;
  public getDados: { nome: string; idade: number } | undefined;

  constructor() {}

  public add(): void {
    this.value += 1;
    this.addValue += 1;
  }

  public remove(): void {
    this.value -= 1;
  }

  public toggleComponent() {
    this.button = !this.button;
  }

  public setDados(event: { nome: string; idade: number }) {
    this.getDados = event;
  }

  ngOnInit(): void {}
}
