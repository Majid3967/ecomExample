import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { AuthResponseData } from '../models/auth-response-data.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userSub = new BehaviorSubject<User | null>(null);
   isLoggedIn = new BehaviorSubject<boolean>(false);
  
  constructor(private http: HttpClient, private router: Router) { }

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://localhost:7016/api/auth/register',
        { email, password }
      )
      .pipe(tap(this.handleUser.bind(this)))
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://localhost:7016/api/auth/login',
        { email, password })
      .pipe(tap(this.handleUser.bind(this)));
     
  }

  private handleUser(response: AuthResponseData) {
    const expireDate = new Date(
      new Date().getTime() + +response.expiresIn * 1000
    );
    const user = new User(
      response.email,
      response.localId,
      response.idToken,
      expireDate
    );

    this.userSub.next(user);
    // localStorage.setItem("token",JSON.stringify(user))

    // localStorage.clear();
   
    
  }

  logout() {
    this.userSub.next(null);
    localStorage.clear()
    this.router.navigate(['/auth']);
  }

  isAuthenticated() {
    console.log(this.userSub.value)
    return new Promise((resolve, reject) => {
      if (this.userSub.value === null) {
        // reject("not log")
      }
      else {
        resolve(true);
      }
      
    },);

  }
  loggedUser(){
    // console.log(this.userSub.getValue())
    return this.userSub.value?.email
  }

  refresh(){
    let local= JSON.parse(localStorage.getItem('token') || '{}');
    if(local){
      // const expireDate = new Date(
      //   new Date().getTime() + +response.expiresIn * 1000
      // );
      const user = new User(
        local.email,
        local.localId,
       local.idToken,
        local.expireDate
      );
      this.userSub.next(user);
      // console.log("function is called")
      // this.isLoggedIn.next(true)
      //  this.router.navigate(['cart'])
    }
    //  let local= JSON.parse(localStorage.getItem('token') || '{}');
    //  local.map((res:any)=>{
    //   var user:any=new User(
    //     user.email=res.email,
    //     user.localId=res.localId,
    //     user.token=res.token,
    //     user.expireDate=res.expireDate
    


    //    )
    //    console.log(User)
    //  })
  
    // if(User){
    //   this.router.navigate(['/productdetail'])
      // const user = new User(
      //   response.email,
      //   response.localId,
      //   response.idToken,
      //   expireDate
      // );
     
      // this.router.navigate(["/auth"])
    }
  }



