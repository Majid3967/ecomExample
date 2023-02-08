import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData } from 'src/app/models/auth-response-data.model';
import { AuthService } from 'src/app/services/auth.service';
import { passwordMatch } from 'src/app/validators/passwordMatch';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent implements OnInit {
  isLogin = false;
  authForm!: FormGroup;
  error: string = '';

  constructor(private authService: AuthService,private router:Router) {}

  ngOnInit(): void {
    this.authForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmpassword: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
      },
      [passwordMatch('password', 'confirmpassword')]
    );
  }

  onSubmit() {
    let authObs: Observable<AuthResponseData>;

    if (this.isLogin) {
      authObs = this.authService.login(
        this.authForm.value.email,
        this.authForm.value.password
      );
    } else {
      authObs = this.authService.signUp(
        this.authForm.value.email,
        this.authForm.value.password
      );
    }

    authObs.subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['']);

      },
      (errorMessage) => {
        this.error = errorMessage.error.error.message;
      }
    );
  }
  changeForm() {
    this.isLogin = !this.isLogin;
  }
}
