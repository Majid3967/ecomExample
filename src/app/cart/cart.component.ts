import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../models/item.model';
import { AuthService } from '../services/auth.service';
// import { CartService } from '../services/cart.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems:Item[]=[]
  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService, private authService:AuthService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ cartItemData }) => {
      this.cartItems = cartItemData
    })


    // this.cartService.getProducts()
    // .subscribe((res: any)=>{
    //   this.products = res;
    //   this.grandTotal = this.cartService.getTotalPrice();
    // })
    // this.authService.refresh()
  }
  removeItem(cartId: number){
    this.cartService.removeCartItem(cartId).subscribe();
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
  emptycart(){
    this.cartService.removeAllCart().subscribe();
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
  checkout(){
    this.cartService.removeAllCart().subscribe();
    this.router.navigateByUrl('success')
  }

}

