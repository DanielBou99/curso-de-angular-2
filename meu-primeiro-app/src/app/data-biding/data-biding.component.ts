import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss'],
})
export class DataBidingComponent implements OnInit {
  public nome = 'Bou';
  public buttonDisabled = false;
  public textEnabled = false;
  public srcImage = 'img/black_view.png';
  public titleImg = 'Black View';
  public titleAlt = 'Black View';
  public position: { x: number; y: number } = { x: 0, y: 0 };

  constructor() {}

  ngOnInit(): void {}

  toggleText(): void {
    this.textEnabled = !this.textEnabled;
  }

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
