import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cartItemTotal!:number;

  constructor(private authService:AuthService){}
  
  title = 'ecomExample';

  ngOnInit():void{
    // this.authService.refresh()
  }

  updateCartCount(count:number){
    count = 0;
    this.cartItemTotal = count;
  }

  componentAdded(event: any){
    console.log(event)
    console.log(event.isLoading)
    // this.cartItemTotal = event.allCartItems
    // console.log(this.cartItemTotal)
  }
}
