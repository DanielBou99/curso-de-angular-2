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
  title = 'meu-primeiro-app';
  public valor: number = 1;
  public destruir: boolean = true;

  constructor() {}

  public adicionar(): number {
    return (this.valor += 1);
  }

  public destruirComponent() {
    this.destruir = false;
  }

  ngOnInit(): void {}
}
