import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


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
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDVfVSjqmRn5hkO-ks3FBgRswpWZPLrxoA',
      { email, password, returnSecureToken: true }
    );
  }
}
