import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../Environments/global';
import { IProducts } from '../Interface/iproducts';
import { Observable } from 'rxjs';
import { IResponseOf } from '../Interface/iproduct-res';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    BaseUUrl : string

  constructor(private _httpClient:HttpClient) {
    this.BaseUUrl = environment.baseUrl

   }
  getProducts(): Observable<IResponseOf<IProducts[]>> {
    return this._httpClient.get<IResponseOf<IProducts[]>>(this.BaseUUrl + '/products');
  }
  getProductById(id: number): Observable<IProducts> {
    return this._httpClient.get<IProducts>(this.BaseUUrl + '/products/' + id);
  }
  getProductCategory(type ? : string ): Observable<IResponseOf<IProducts[]>> {
    return this._httpClient.get<IResponseOf<IProducts[]>>(`${this.BaseUUrl}/products/category?type=${type}`);
  }
}
