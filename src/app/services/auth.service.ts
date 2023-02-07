import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from '../models/user.model';


export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
  }


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userSub = new BehaviorSubject<User|null>(null);
  constructor(private http: HttpClient,private router:Router) {}

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDVfVSjqmRn5hkO-ks3FBgRswpWZPLrxoA',
      { email, password, returnSecureToken: true }
    ).pipe(tap(this.handleUser.bind(this)));
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
  }

  logout() {
    this.userSub.next(null);
    this.router.navigate(['/auth']);
  }
}
