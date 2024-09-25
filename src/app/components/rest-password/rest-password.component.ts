import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-rest-password',
  templateUrl: './rest-password.component.html',
  styleUrls: ['./rest-password.component.scss']
})
export class RestPasswordComponent {
  constructor(private _AuthService: AuthService, private _Router: Router,private title:Title) {title.setTitle('Rest Password') }
  load = this._AuthService.isLoading;
  errMesg: String = '';

  resetPassForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    newPassword: new FormControl('', [Validators.required, Validators.pattern(/^\w{6,}$/)]),

  })

  handelRest(): void {

    const restPass = this.resetPassForm.value;
    this.load = true;
    if (this.resetPassForm.value) {
      this._AuthService.restPassword(restPass).subscribe({
        next: (response) => {
          localStorage.setItem('_Token', response.token)
          this._Router.navigate(['/home'])

        },
        error: (err) => {
          this.errMesg = err.error.message
          this.load = false;

        }
      })
    }

  }
}
