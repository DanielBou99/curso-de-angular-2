import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss'],
})
export class DataBidingComponent implements OnInit {
  public nome = 'data-binding';
  public buttonDisabled = false;
  public textEnabled = false;
  public srcImage = 'img/black_view.png';
  public titleImg = 'Black View';
  public titleAlt = 'Black View';
  constructor() {}

  ngOnInit(): void {}

  toggleText(): void {
    this.textEnabled = !this.textEnabled;
  }
}
