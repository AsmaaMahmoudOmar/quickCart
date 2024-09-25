import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private _HttpClient: HttpClient) { }
  // store token to another variable ,name of (token form api and a sign token from localStorage )


  // count of cart

  cartNumber: BehaviorSubject<number> = new BehaviorSubject(0)
  // add products to cart
  addToCart(prodId: string): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart', {
      productId: prodId
    }
    
    )
  }

  // method to get product of this cartUser
  getCartUser(): Observable<any> {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart'
     )
  }

  //remove product from cart
  removeProduct(prodId: string): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${prodId}`
      )
  }

  // changeCount product in cart
  changeCount(prodId: string, count: any): Observable<any> {
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${prodId}`,
      {
        count
      })
  }

  // changeCount product in c
}
