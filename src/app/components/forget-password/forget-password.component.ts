import { Component } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  constructor(private _AuthService: AuthService,
    private _Router: Router,
    private title:Title
  ) { title.setTitle('Forget Password') }
  load: boolean = false;
  errMsg: string = '';
  forgetForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })
  handelForget(): void {
    const emailform = this.forgetForm.value
    this.load = true
    this._AuthService.forgetPassword(this.forgetForm.value).subscribe({
      next: (res) => {
        console.log(res);
        if (res.statusMsg == "success") {
        this._Router.navigate(['/code'])

        }
        this.load = false
      },
      error: (err) => {
        console.log(err);
        this.errMsg = err.error.message
        this.load = false


      }
    })
  }
}
