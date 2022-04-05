import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  private list: Array<string> = ['X Bacon', 'Feijão', 'Ovo'];
  private url: string = 'http://localhost:3000/';
  public emitEvent = new EventEmitter();

  constructor(private http: HttpClient) {}

  // public foodList() {
  //   return this.list;
  // }

  public foodList(): Observable<Array<FoodList>> {
    return this.http.get<Array<FoodList>>(`${this.url}list-food`).pipe(
      (res) => res,
      (error) => error
    );
  }

  public foodListAdd(value: string) {
    this.foodListAlert(value);
    return this.list.push(value);
  }

  public foodListAlert(value: string) {
    return this.emitEvent.emit(value);
  }
}
