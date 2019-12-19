import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';


@Injectable()
export class ProductsApi {

  readonly API = '/api/cashflowCategories';

  constructor(private http: HttpClient) {}

  getCashflowCategories(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API);
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post(this.API, product);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(`${this.API}/${product.id}`, product);
  }

}