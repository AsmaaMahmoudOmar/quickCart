import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CartServiceService } from 'src/app/Services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor
    (
      private _CartService: CartServiceService,
      private _Renderer2: Renderer2,
      private title:Title
    ) {title.setTitle ('Cart') }
  cartInfo: any
  cartDeta: any[] = []
  errMsg: string = ""
  len: any[] = []
  ngOnInit(): void {
    this._CartService.getCartUser().subscribe({
      next: (res) => {
        if (res.status === "success") {
          this.cartInfo = res.data;
          this.cartDeta = res.data.products
          this._CartService.cartNumber.next(res.numOfCartItems)
          console.log(this.cartDeta);


        }
      },
      error: (err) => {
        this.errMsg = err.error.message
      }
    })

  }

  removeItem(id: string, btnRemove: HTMLButtonElement): void {
    this._Renderer2.setAttribute(btnRemove, 'disabled', 'true');

    this._CartService.removeProduct(id).subscribe({
      next: (res) => {
        this._CartService.cartNumber.next(res.numOfCartItems)
        console.log(res);
        this.cartInfo = res.data;
        this.cartDeta = res.data.products


        this._Renderer2.removeAttribute(btnRemove, 'disabled')

      },
      error: (err) => {
        console.log(err);
        this.errMsg = err.error.message


      }
    })
  }

  changCountItem(id: string, count: number, btn1: HTMLButtonElement, btn2: HTMLButtonElement): void {

    if (count >= 1) {
      this._Renderer2.setAttribute(btn1, 'disabled', 'true');
      this._Renderer2.setAttribute(btn2, 'disabled', 'true');
      this._CartService.changeCount(id, count).subscribe({
        next: (res) => {
          console.log(res);
          this._Renderer2.removeAttribute(btn1, 'disabled')
          this._Renderer2.removeAttribute(btn2, 'disabled')

          this.cartInfo = res.data
          this.cartDeta = res.data.products

        }

      })
    }
  }
}
