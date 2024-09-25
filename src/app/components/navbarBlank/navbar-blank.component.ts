import { Router } from '@angular/router';
import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { CartServiceService } from 'src/app/Services/cart-service.service';
import { WishlistService } from 'src/app/Services/wishlist.service';


@Component({
  selector: 'app-navbar-blank',
  templateUrl: './navbar-blank.component.html',
  styleUrls: ['./navbar-blank.component.scss']
})
export class NavbarBlankComponent implements OnInit {
  constructor
    (
      private _Router: Router,
      private _CartService: CartServiceService,
      private _WishlistService: WishlistService,
      private Rednder: Renderer2

    ) { }
  cartCount: number = 0;
  wishCount: number = 0;


  @ViewChild('navbar') navElement!: ElementRef
  @HostListener('window:scroll')
  onScroll(): void {
    if (window.scrollY > 50) {
      this.Rednder.addClass(this.navElement.nativeElement, 'px-5');
    }else{
      this.Rednder.removeClass(this.navElement.nativeElement, 'px-5')

    }
  }

  ngOnInit(): void {
    this._CartService.cartNumber.subscribe({
      next: (data) => {
        this.cartCount = data
      }
    })

    this._CartService.getCartUser().subscribe({
      next: (res) => {
        this._CartService.cartNumber.next(res.numOfCartItems)
      }
    })
    this._WishlistService.wishNum.subscribe({
      next: (num) => {
        this.wishCount = num
      }
    })
    this._WishlistService.getWishlist().subscribe({
      next: (res) => {
        this._WishlistService.wishNum.next(res.count)
      }
    })
  }
  signOut(): void {
    localStorage.removeItem('_Token');
    this._Router.navigate(['/login'])
  }
}
