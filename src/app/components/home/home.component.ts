import { OwlOptions } from 'ngx-owl-carousel-o';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductData } from 'src/app/Interfaces/product-data';
import { SearchPipe } from 'src/app/pipe/search.pipe';
import { ApiDataService } from 'src/app/Services/api-data.service';
import { CartServiceService } from 'src/app/Services/cart-service.service';
import { WishlistService } from 'src/app/Services/wishlist.service';
import { Categories } from 'src/app/Interfaces/categories';
import { CategoryService } from 'src/app/Services/category.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

  constructor(
    private _ApiDataService: ApiDataService,
    private _CartService: CartServiceService,
    private _ToastrService: ToastrService,
    private _WishlistService: WishlistService,
    private _Renderer: Renderer2,
    private title:Title

  ) { title.setTitle('Home')}

  wishList: any[] = [];
  prodsData: ProductData[] = []
  termInput: string = ''


  //get data from api
  ngOnInit(): void {
    this._ApiDataService.productData().subscribe({
      next: (res) => {
        this.prodsData = res.data;

        console.log(this.prodsData);
      },
      error: (err) => {
        console.log(err);

      }
    })
    
  }

  // method to cart
  addProductToCart(prodId: string): void {
    this._CartService.addToCart(prodId).subscribe({
      next: (res) => {
        this._CartService.cartNumber.next(res.numOfCartItems)
        if (localStorage.getItem('_Token') !== null) {
          console.log(res);
          this._ToastrService.success(res.message);

        }
      },
      error: (err) => {
        console.log(err);
        this._ToastrService.error(err.message);

      }
    })
  }

  // merhod to wishlist
  addProductToWishList(prodId: string, bg: HTMLElement): void {
    this._WishlistService.addToWishlist(prodId).subscribe({

      next: (res) => {

        if (localStorage.getItem('_Token') !== null) {
          console.log(res.data);
          this._ToastrService.success(res.message);
          this._Renderer.removeClass(bg, 'fa-regular')
          this._Renderer.addClass(bg, "fa-solid")

        }
        this.wishList = res.data
        this._WishlistService.wishNum.next(this.wishList.length)

      },
      error: (err) => {
        console.log(err);
        this._ToastrService.error(err.message);

      }
    })
  }

 
}
