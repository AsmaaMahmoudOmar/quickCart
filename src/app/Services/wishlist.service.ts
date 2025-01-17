import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _HttpClient: HttpClient) { }


  wishNum: BehaviorSubject<number> = new BehaviorSubject(0)




  addToWishlist(productId: string): Observable<any> {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/wishlist',
      {
        productId
      }
    )
  }

  deleteFromWishlist(productId: string): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`
    )
  }

  getWishlist(): Observable<any> {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist')
  }
}
