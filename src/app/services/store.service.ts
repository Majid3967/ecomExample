import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  
  constructor(private http: HttpClient) {}

  getAllItems() {
    return this.http
      .get<{ [key: string]: Item }>(
        'https://localhost:7016/api/items/getAllItems'
      )
      .pipe(
        map((response) => {
            let allItems: Item[] = [];
          for (let key in response) {
            let item = new Item(
              0,
              response[key].itemId,
              response[key].itemName,
              response[key].imageUrl,
              response[key].description,
              response[key].categoryId,
              response[key].price
            );
            allItems.push(item);
          }
          return allItems
        })
      );
      
  }

  filterItems(category:number) {
    return this.http
      .get<{ [key: string]: Item }>(
        'https://localhost:7016/api/items/getAllItems'
      )
      .pipe(
        map((response) => {
            let allItems: Item[] = [];
          for (let key in response) {
            if(category == 0 || response[key].categoryId == category){
            let item = new Item(
              0,
              response[key].itemId,
              response[key].itemName,
              response[key].imageUrl,
              response[key].description,
              response[key].categoryId,
              response[key].price
            );
            allItems.push(item);
            }
          }
          return allItems
        })
      );
  }
  getItem(itemId:number){
    return this.http
    .get<Item>(
      `https://localhost:7016/api/items/getItem/${itemId}`
    )
    .pipe(
      map((response) => {
        var item:Item = response
        return item
        }
      )
    );
  }
}
