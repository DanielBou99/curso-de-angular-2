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

  constructor() {}

  public add(): void {
    this.value += 1;
  }

  public remove(): void {
    this.value -= 1;
  }

  public toggleComponent() {
    this.button = !this.button;
  }

  ngOnInit(): void {}
}
