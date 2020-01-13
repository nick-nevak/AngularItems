import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/app/app.component';
import { Item } from '../models/item';


@Injectable()
export class ItemsApi {

  readonly API = `${baseUrl}/api/items`;

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.API);
  }

  createItem(item: Item): Observable<any> {
    return this.http.post(this.API, item);
  }

  updateItem(item: Item): Observable<any> {
    return this.http.put(`${this.API}/${item.id}`, item);
  }

}