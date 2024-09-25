import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/Services/order.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  constructor
    (
      private _OrderService: OrderService,
      private _ActivatedRoute: ActivatedRoute,
      private _Router: Router,
      private title:Title

    ) {title.setTitle('Payment') }

  detailsAddress: FormGroup = new FormGroup({
    details: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    city: new FormControl('', [Validators.required])
  })

  cardId: any;
  isLoading: boolean = false;
  isCashLoad: boolean = false;
  Msg: string = ''

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (param) => {
        console.log(param);
        this.cardId = param.get('id')

      }
    })
  }

  CheckOnlinePayment(): void {

    let shippingAddress = this.detailsAddress.value
    this.isLoading = true;

    // click method for online payment
    this._OrderService.OnlinePayment(this.cardId, shippingAddress).subscribe({
      next: (res) => {
        window.open(res.session.url)
        this.detailsAddress.reset({
          details: '',
          phone: '',
          city: ''
        }
        )
        this.isLoading = false
      },
      error: (err) => {
        this.Msg = err.error.message
        this.isLoading = false

      }
    })
  }

  CheckCashPayment(): void {
    // loading
    this.isCashLoad = true
    // method cashPayment
    this._OrderService.CashPayment(this.cardId, this.detailsAddress.value).subscribe({
      next: (res) => {
        console.log(res);

        this.detailsAddress.reset({
          details: '',
          phone: '',
          city: ''
        })

        this.isCashLoad = false;
        this._Router.navigate(['/allorders'])


      },
      error: (err) => {
        // console.log(err.error.message);
        this.Msg = err.error.message

        this.isCashLoad = false;

      }
    })
  }

}
