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

  constructor(private router:Router,private authService:AuthService){}

  ngOnInit(): void {
    this.authService.userSub.subscribe((user) => {
      this.isAuth = user ? true : false;
    });
  }

  authForm(){
    this.router.navigateByUrl('auth')
  }
  logOut(){
    this.authService.logout()
  }

}
