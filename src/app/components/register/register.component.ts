import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _AuthService: AuthService, private _Router: Router,
    private title :Title
  ) { title.setTitle('Register')}
  load = this._AuthService.isLoading;
  errMesg: string = '';
  //! input Group,validation/ 
  registerForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.pattern(/^\w{6,}$/)]),
    rePassword: new FormControl(""),
    phone: new FormControl("", [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  }, { validators: [this.customRepassword] } as FormControlOptions)

  // custom validators
  customRepassword(group: FormGroup): void {
    const password = group.get('password');
    const rePassword = group.get('rePassword');
    if (rePassword?.value === '') {
      rePassword?.setErrors({ required: true })

    }
    else if (password?.value !== rePassword?.value) {
      rePassword?.setErrors({ mismatch: true })
    }
  }

  //* to clear value of input  /
  clearInput(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
      rePassword: new FormControl(""),
      phone: new FormControl(""),
    })
  }

  //? method submit form and Api /
  handelForm(): void {
    const userData = this.registerForm.value;
    this.load = true;
    if (this.registerForm.value) {
      this._AuthService.Register(userData).subscribe({
        next: (response) => {
          console.log(response);
          if (response.message == "success") {
            this.clearInput();
            this._Router.navigate(['/login'])
          }

        },
        error: (err) => {
          this.errMesg = err.error.message;
          this.load = false;
        }
      })
    }



  }

}
