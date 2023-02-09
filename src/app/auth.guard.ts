import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

  //     return this.authService.isAuthenticated().then((data:any) => {
  //       if (data) {
  //         return true;
  //       } else {
          
  //         return false;
  //       }
  //     });
  // }
  if(localStorage.getItem("token")){
    return true;
  }
   else{
     return false
   }
  // return this.authService.isLoggedIn;

}
}
  
