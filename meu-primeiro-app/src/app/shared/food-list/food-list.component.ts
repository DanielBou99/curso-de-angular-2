import { FoodListService } from './../../services/food-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public foodList: Array<String> = [];

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodList = this.foodListService.foodList();
    this.foodListService.emitEvent.subscribe({
      next: (res: any) => alert(`Olha, você add ${res}`),
      error: (err: any) => console.log(err),
    });
  }
}
