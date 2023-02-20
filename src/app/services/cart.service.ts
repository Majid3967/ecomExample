import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Cart } from '../models/cart.model';
import { Item } from '../models/item.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemCount = new BehaviorSubject<number>(0);
  cartItemsList = new BehaviorSubject<any>([]);
  
  // public cartItemList : any =[]
   detailItem: any =[]
  public productList = new BehaviorSubject<any>([]);
  public detailList = new BehaviorSubject<any>([]);
  

  constructor(private http: HttpClient,private authService:AuthService) { }

  updatecartItemCount(count:number){
    this.cartItemCount.next(count);
  }
  addCartItemList(addedList:Cart[]){
    this.cartItemsList.next(addedList);
  }
  getCartItemList(){
    return this.addCartItemList
  }

  getAllCartItems(userEmail:string){
    return this.http
    .get<{ [key: string]: Cart }>(
      `https://localhost:7016/api/cart/getAllCartItems/${userEmail}`
    )
    .pipe(
      map((response) => {
          let cartItems: Cart[] = [];
        for (let key in response) {
          let cartItem = new Cart(
            response[key].cartId,
            response[key].userEmail,
            response[key].itemId,
            response[key].quantity,
          );
          cartItems.push(cartItem);
        }
        return cartItems
      })
    );
  }

  getProducts(){
    return this.productList.asObservable();
  }

  getProductsDetail(){
    return this.detailList.asObservable();
  }

  

  // setProduct(product : any){
  //   this.cartItemList.push(...product);
  //   this.productList.next(product);
  // }
  addtoCart(item : Item){
    var count = this.cartItemCount.value+1;
    this.updatecartItemCount(count);
    let userEmail = this.authService.loggedUser();
    return this.http
    .post<string>(
      `https://localhost:7016/api/cart/addCartItem`,
      {
        userEmail:userEmail,
        itemId:item.itemId,
        quantity:1
      }
    );
    


    // this.cartItemList.push(product);
    // this.productList.next(this.cartItemList);
    // this.getTotalPrice();
    // console.log(this.cartItemList)
  }

  updateToCart(cartItem : Cart){
    var count = this.cartItemCount.value+1;
    this.updatecartItemCount(count);
    return this.http
    .post<string>(
      `https://localhost:7016/api/cart/updateCartItem`,
      cartItem
    );
  }

  AddtoDetail(product :any){
    this.detailItem.push(product)
    this.detailList.next(this.detailItem)
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    // this.cartItemList.map((a:any)=>{
    //   grandTotal += a.total;
    // })
    return grandTotal;
  }
  removeCartItem(cartId: number){
    return this.http
    .delete<string>(
      `https://localhost:7016/api/cart/deleteCartItem/${cartId}`
    );
    // this.cartItemList.map((a:any, index:any)=>{
    //   if(product.id=== a.id){
    //     this.cartItemList.splice(index,1);
    //   }
    // })
    // this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    let userEmail = this.authService.loggedUser();
    return this.http
    .delete<string>(
      `https://localhost:7016/api/cart/deleteAllCartItem/${userEmail}`
    );
    // this.cartItemList = []
    // this.productList.next(this.cartItemList);
  }
}

