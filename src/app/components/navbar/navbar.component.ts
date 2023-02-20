import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isAuth=false
  @Input() totalItem : number = 0;
  totalCartItem:number = 0;  

  constructor(private router:Router,private authService:AuthService, private cartService:CartService){}

  ngOnInit(): void {
    this.authService.userSub.subscribe((user) => {
      this.isAuth = user ? true : false;
    });
    this.cartService.cartItemCount.subscribe((data)=>{
      this.totalCartItem = data
    })

    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  authForm(){
    this.router.navigateByUrl('auth')
  }
  logOut(){
    this.authService.logout()
  }

  onCartClick(){
    if(!this.isAuth){
      this.router.navigateByUrl('auth')
    }
  }

}
