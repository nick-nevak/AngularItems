import { Component, OnInit } from '@angular/core';
import { ItemsFacade } from '../../items-facade';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private itemsFacade: ItemsFacade) { }

  ngOnInit() {
    this.itemsFacade.loadProducts().subscribe();
    this.products$ = this.itemsFacade.getProducts$();
  }

}
