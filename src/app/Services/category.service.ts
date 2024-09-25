import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _HttpClient: HttpClient) { }

  getCategory(): Observable<any> {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories');
  }

  getSpecificCategory(catId: string): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${catId}`);
  }
  getAllSubCategory(): Observable<any> {
    return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/subcategories")
  }
  getAllSubCategoryOfSpecic(specId: string): Observable<any> {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${specId}/subcategories`)
  }
}
