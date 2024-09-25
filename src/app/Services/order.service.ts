import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _HttpClient:HttpClient) { }


 OnlinePayment(CardId:string,shippingAddress:any):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${CardId}?url=http://localhost:4200`,
    {
      shippingAddress
    }
  )
 }
 CashPayment(cardId:string,shippingAddress:any):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/${cardId}`,
    {
      shippingAddress
    }

  )
 }

 AllOrder():Observable<any>{
  return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/orders/')
 }

 UserOrders(userId:string):Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`)
 }
}
