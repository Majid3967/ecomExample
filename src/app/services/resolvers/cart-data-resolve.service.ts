import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Cart } from "src/app/models/cart.model";
import { AuthService } from "../auth.service";
import { CartService } from "../cart.service";

@Injectable({
    providedIn:'root'
})
export class CartResolveService implements Resolve<Cart[]>{
    constructor(private cartService:CartService,private authService:AuthService){}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Cart[] | Observable<Cart[]> | Promise<Cart[]> {
        let userEmail = this.authService.loggedUser()
        console.log("Resolve"+userEmail)
        let cartItems = this.cartService.getAllCartItems(userEmail!);
        return cartItems;
      }
}