import { Component, OnInit,Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { ApiDataService } from 'src/app/Services/api-data.service';
import { CartServiceService } from 'src/app/Services/cart-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  // to pull id from Url;
  prodId: any;
  prodDetial: any = {};

  constructor(private _ApiDataService: ApiDataService, 
    private _ActivatedRoute: ActivatedRoute,
    private _CartService:CartServiceService,
    private title:Title
  ) { }
  
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (parm) => {
        this.prodId = parm.get('id');//id (this name of routerLink the same ex details/:id)

      }
    })
    this._ApiDataService.productDetails(this.prodId).subscribe({
      next: (res) => {
        this.prodDetial = res.data
        console.log(this.prodDetial);
        this.title.setTitle(`Product Details | ${this.prodDetial?.title}`)

      }
    })
  }

  addProductToCart(prodId:string):void{
    this._CartService.addToCart(prodId).subscribe({
      next:(res)=>{
        console.log(res);
        this._CartService.cartNumber.next(res.numOfCartItems)
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
// slider for details Img

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    autoplayTimeout:3000,
    items:1,
    nav: true
  }

}
