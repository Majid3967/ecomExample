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
<<<<<<< Updated upstream
        'https://ecomangular-eb6f7-default-rtdb.firebaseio.com/itmes.json'
=======
        'https://localhost:7113/api/Product'
>>>>>>> Stashed changes
      )
      .pipe(
        map((response) => {
            let allItems: Item[] = [];
          for (let key in response) {
            let item = new Item(
<<<<<<< Updated upstream
              response[key].itemID,
              response[key].itemName,
              response[key].imgUrl,
              response[key].description,
              response[key].catID,
=======
              0,
              response[key].productID,
              response[key].productName,
              response[key].image,
              response[key].description,
              response[key].categoryID,
>>>>>>> Stashed changes
              response[key].price
            );
            allItems.push(item);
          }
         
          return allItems
        })
      );
      
  }

  filterItems(category:string) {
    return this.http
      .get<{ [key: string]: Item }>(
<<<<<<< Updated upstream
        'https://ecomangular-eb6f7-default-rtdb.firebaseio.com/itmes.json'
=======
        'https://localhost:7113/api/Product'
>>>>>>> Stashed changes
      )
      .pipe(
        map((response) => {
            let allItems: Item[] = [];
          for (let key in response) {
<<<<<<< Updated upstream
            if(category == '0' || response[key].catID == category){
            let item = new Item(
              response[key].itemID,
              response[key].itemName,
              response[key].imgUrl,
              response[key].description,
              response[key].catID,
=======
            if(category == 0 || response[key].categoryID == category){
            let item = new Item(
              0,
              response[key].productID,
              response[key].productName,
              response[key].image,
              response[key].description,
              response[key].categoryID,
>>>>>>> Stashed changes
              response[key].price
            );
            allItems.push(item);
            }
          }
          // console.log("sds")
          // console.log(allItems)
          return allItems
        })
      );
<<<<<<< Updated upstream
      
=======
  }
  getItem(itemId:number){
    return this.http
    .get<Item>(
      `https://localhost:7113/api/Product/${itemId}`
    )
    .pipe(
      map((response) => {
        var item:Item = response
        return item
        }
      )
    );
>>>>>>> Stashed changes
  }
}
