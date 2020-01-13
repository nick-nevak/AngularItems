import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable()
export class ItemsState {

  private updating$ = new BehaviorSubject<boolean>(false);
  private items$ = new BehaviorSubject<Item[]>(null);

  isUpdating$(): Observable<boolean> {
    return this.updating$.asObservable();
  }

  setUpdating(isUpdating: boolean): void {
    this.updating$.next(isUpdating);
  }

  getItems$(): Observable<Item[]> {
    return this.items$.asObservable();
  }

  setItems(items: Item[]): void {
    this.items$.next(items);
  }

  addItem(item: Item): void {
    const currentValue = this.items$.getValue();
    this.items$.next([...currentValue, item]);
  }

  updateItem(updatedItem: Item): void {
    const items = this.items$.getValue();
    const indexOfUpdated = items.findIndex(p => p.id === updatedItem.id);
    items[indexOfUpdated] = updatedItem;
    this.items$.next([...items]);
  }

  updateItemId(itemToReplace: Item, addedItemWithId: Item): void {
    const items = this.items$.getValue();
    const updatedIndex = items.findIndex(p => p === itemToReplace);
    items[updatedIndex] = addedItemWithId;
    this.items$.next([...items]);
  }

  removeItem(itemToRemove: Item): void {
    const currentValue = this.items$.getValue();
    this.items$.next(currentValue.filter(p => p !== itemToRemove));
  }
}
