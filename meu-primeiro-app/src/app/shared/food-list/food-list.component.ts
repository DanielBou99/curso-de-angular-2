import { FoodListService } from './../../services/food-list.service';
import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public foodList: Array<FoodList> = [];

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      (res) => (this.foodList = res),
      (error) => console.log(error)
    );
    this.foodListService.emitEvent.subscribe((res) => {
      alert(`Você adicionou => ${res.nome}`);
      return this.foodList.push(res);
    });
  }

  foodListDelete(id: number) {
    return this.foodListService.foodListDelete(id).subscribe(
      (res) => {
        this.foodList = this.foodList.filter((item) => {
          return id !== item.id;
        });
      },
      (error) => error
    );
  }

  foodListEdit(value: string, id: number) {
    this.foodListService.foodListEdit(id, value).subscribe(
      (res) => alert(`ID: ${id} atualizado para ${value}`),
      (error) => error
    );
  }
}
