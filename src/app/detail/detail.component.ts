import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../models/cart.model';
import { Item } from '../models/item.model';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  item!:Item;
  allCartItems:Cart[]=[]
  public products : any = [];

  constructor(private api:ApiService, private cartService:CartService, private router:Router, private authService:AuthService,private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.item = this.route.snapshot.params as Item
    // console.log("Detail: "+ this.route.snapshot.params)

    this.cartService.getProductsDetail()
    .subscribe((res)=>{
      this.products=res
    });

    this.cartService.cartItemsList.subscribe((data:Cart[])=>{
      this.allCartItems=data
    })
  }

  addToCart(item: any){
    let updateCart = null;
    if(this.authService.userSub.value===null){
      this.router.navigate(["/auth"])
    }
    else{
    this.allCartItems.forEach((cartItem)=>{
      // console.log(item.itemId)
      if(cartItem.itemId == item.itemId){
        // console.log(cartItem);
        updateCart = cartItem;
        updateCart.quantity = cartItem.quantity+1;
      }
    })
    console.log(updateCart);
    if(updateCart == null){
      this.cartService.addtoCart(item).subscribe();
    }
    else{
    this.cartService.updateToCart(updateCart).subscribe();
    }
    }
  }
}
