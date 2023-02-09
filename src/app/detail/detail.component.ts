import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public products : any = [];

  constructor(private api:ApiService, private cartService:CartService, private router:Router, private authService:AuthService){

  }
  ngOnInit(): void {
    this.cartService.getProductsDetail()
    .subscribe((res)=>{

      this.products=res
    })
  }

  addToCart(item: any){
    if(this.authService.userSub.value===null){
      this.router.navigate(["/auth"])
    }
    else{
    this.cartService.addtoCart(item);
    

    }
   

  }


}
