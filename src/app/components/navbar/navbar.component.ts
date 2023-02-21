import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isAuth=false

<<<<<<< Updated upstream
  constructor(private router:Router,private authService:AuthService){}
=======
  constructor(private router:Router,private authService:AuthService, private cartService:CartService){}
totalCountItems:number=0;
>>>>>>> Stashed changes

  ngOnInit(): void {
    this.authService.userSub.subscribe((user) => {
      this.isAuth = user ? true : false;
    });
<<<<<<< Updated upstream
=======
     this.cartService.cartItemCount.subscribe((data)=>{
     this.totalCartItem=data

     })
     console.log(this.totalCountItems)
    this.cartService.cartItemCount.subscribe(x=>{

this.totalCountItems++;
console.log(this.totalCountItems)
    })

    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
>>>>>>> Stashed changes
  }

  authForm(){
    this.router.navigateByUrl('auth')
  }
  logOut(){
    this.authService.logout()
  }

<<<<<<< Updated upstream
=======
  onCartClick(){
    // this.totalCartItem = this.totalCartItem+1;
    if(!this.isAuth){
      this.router.navigateByUrl('auth')
     
    }
  }

>>>>>>> Stashed changes
}
