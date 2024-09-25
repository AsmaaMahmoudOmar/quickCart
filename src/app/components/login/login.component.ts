import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthService: AuthService,
    private _Router: Router,
    private title: Title
  ) { title.setTitle("Login") }
  load = this._AuthService.isLoading;
  errMesg: String = '';

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^\w{6,}$/)]),

  })

  handelLogin(): void {
    console.log(this.loginForm);

    const LoginData = this.loginForm.value;
    this.load = true;
    if (this.loginForm.value) {
      this._AuthService.Login(LoginData).subscribe({
        next: (response) => {
          if (response.message == "success") {
            localStorage.setItem('_Token', response.token)
            this._Router.navigate(['/home'])

          }
          console.log(response);
        },
        error: (err) => {
          this.errMesg = err.error.message
          console.log(err);
          this.load = false;

        }
      })
    }

  }
}
