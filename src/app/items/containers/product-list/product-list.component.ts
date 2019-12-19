import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { ItemsFacade } from '../../items-facade';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() cashflowCategories$: Product[];
  newProduct: Product = { id: 0, name: '' };
  isUpdating$: Observable<boolean>;

  constructor(private itemsFacade: ItemsFacade) {
    this.isUpdating$ = itemsFacade.isUpdating$();
  }

  ngOnInit() {
    this.itemsFacade.loadProducts();
  }

  addProduct(product: Product) {
    this.itemsFacade.addProduct(product);
  }

  updateProduct(product: Product) {
    this.itemsFacade.updateProduct(product);
  }
}
