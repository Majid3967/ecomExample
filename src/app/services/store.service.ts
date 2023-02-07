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
        'https://ecomangular-eb6f7-default-rtdb.firebaseio.com/itmes.json'
      )
      .pipe(
        map((response) => {
            let allItems: Item[] = [];
          for (let key in response) {
            let item = new Item(
              response[key].itemID,
              response[key].itemName,
              response[key].imgUrl,
              response[key].description,
              response[key].catID
            );
            allItems.push(item);
          }
          return allItems
        })
      );
      
  }
}
