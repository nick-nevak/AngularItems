import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable()
export class ItemsState {

  private updating$ = new BehaviorSubject<boolean>(false);
  private products$ = new BehaviorSubject<Product[]>(null);

  isUpdating$() {
    return this.updating$.asObservable();
  }

  setUpdating(isUpdating: boolean) {
    this.updating$.next(isUpdating);
  }

  getProducts$() {
    return this.products$.asObservable();
  }

  setProducts(products: Product[]) {
    debugger;
    this.products$.next(products);
  }

  addProduct(product: Product) {
    const currentValue = this.products$.getValue();
    this.products$.next([...currentValue, product]);
  }

  updateProduct(updatedProduct: Product) {
    const products = this.products$.getValue();
    const indexOfUpdated = products.findIndex(p => p.id === updatedProduct.id);
    products[indexOfUpdated] = updatedProduct;
    this.products$.next([...products]);
  }

  updateProductId(productToReplace: Product, addedProductWithId: Product) {
    const products = this.products$.getValue();
    const updatedCategoryIndex = products.findIndex(p => p === productToReplace);
    products[updatedCategoryIndex] = addedProductWithId;
    this.products$.next([...products]);
  }

  removeProduct(productToRemove: Product) {
    const currentValue = this.products$.getValue();
    this.products$.next(currentValue.filter(p => p !== productToRemove));
  }
}
