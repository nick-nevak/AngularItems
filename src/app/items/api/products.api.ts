import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/app/app.component';


@Injectable()
export class ProductsApi {

  readonly API = `${baseUrl}/api/items`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API);
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post(this.API, product);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(`${this.API}/${product.id}`, product);
  }

}