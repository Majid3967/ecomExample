import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
// import { CartService } from '../services/cart.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService, private authService:AuthService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe((res: any)=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
    this.authService.refresh()
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

}

