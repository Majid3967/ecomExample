import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Cart } from "src/app/models/cart.model";
import { Item } from "src/app/models/item.model";
import { AuthService } from "../auth.service";
import { CartService } from "../cart.service";
import { StoreService } from "../store.service";

@Injectable({
    providedIn:'root'
})
export class CartItemsResolveService implements Resolve<Item[]>{
    constructor(private cartService:CartService,private authService:AuthService,private storeService:StoreService){}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Item[] | Observable<Item[]> | Promise<Item[]> {
        let userEmail = this.authService.loggedUser()
        let cart = this.cartService.getAllCartItems(userEmail!);

        let cartItems:Item[] = []

        cart.forEach((element)=>{
            element.forEach((item)=>{
                let cartId = item.cartId;
                let detailItem = this.storeService.getItem(item.itemId)
                detailItem.forEach((deItem)=>{
                    deItem.cartId = cartId
                    cartItems.push(deItem);
                })
            })
        })
        return cartItems;
      }
}