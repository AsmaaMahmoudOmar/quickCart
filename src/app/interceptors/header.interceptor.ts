import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  let myToken: any =  localStorage.getItem('_Token') 
   
    let modified=request.clone({
    headers:request.headers.set("token",myToken)
   })
   
    return next.handle(modified);
  }
}
