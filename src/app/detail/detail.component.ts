import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public products : any = [];

  constructor(private api:ApiService, private cartService:CartService, private router:Router, private authService:AuthService,private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.item = this.route.snapshot.params as Item
    console.log(this.route.snapshot.params)

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
    this.cartService.addtoCart(item).subscribe();
    }
  }
}
