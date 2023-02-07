import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class StoreService{

    allItems = []

    constructor(private http: HttpClient) {}

    getAllItems(){
        this.http.get('https://ecomangular-eb6f7-default-rtdb.firebaseio.com/itmes.json').pipe()
    }

}