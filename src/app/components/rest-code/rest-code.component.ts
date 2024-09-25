import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, RouterEvent } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-rest-code',
  templateUrl: './rest-code.component.html',
  styleUrls: ['./rest-code.component.scss']
})
export class RestCodeComponent {
  constructor(private _AuthService: AuthService,
    private _Router: Router,
    private title:Title
  ) { title.setTitle('Reset Code')}
  load: boolean = false;
  errMsg: string = '';
  restForm: FormGroup = new FormGroup({
    resetCode: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{6}$/)])
  })
  handelCode(): void {
    const code = this.restForm.value
    this.load = true
    this._AuthService.restCosd(code).subscribe({
      next: (res) => {
        console.log(res);
        if (res.status == "Success") {
        this._Router.navigate(['/resetPass'])

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
