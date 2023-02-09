import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { CartService } from "src/app/services/cart.service";

@Component({
    selector: 'app-productdetail',
    templateUrl: './productdetail.component.html',
    styleUrls: ['./productdetail.component.scss']
  })
  export class ProductDetailComponent implements OnInit {
  
    public productList : any ;
   
    constructor(private api : ApiService, private cartService : CartService) { }
  
    ngOnInit(): void {
      this.api.getProduct()
      .subscribe(res=>{
        this.productList = res;
        
        console.log(this.productList)
      });
  
    
    }
    addToCart(item: any){
      this.cartService.addtoCart(item);
    }
    
  
  }