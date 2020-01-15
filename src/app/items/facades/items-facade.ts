import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Item } from '../models/item';
import { ItemsApi } from '../api/items.api';
import { Store } from '@ngrx/store';
import { ItemsState, getAllItems } from 'src/app/state/items/reducers';
import { LoadItems, AddItem, UpdateItem, DeleteItem } from 'src/app/state/items/actions/items';

@Injectable()
export class ItemsFacade {

  constructor(private itemsState: Store<ItemsState>) { }

  //   isUpdating$(): Observable<boolean> {
  //     return this.itemsState.isUpdating$();
  //   }

  getItems$(): Observable<Item[]> {
    // here we just pass the state without any projections
    // it may happen that it is necessary to combine two or more streams and expose to the components
    return this.itemsState.select(getAllItems);
  }

  loadItems(): void {
    return this.itemsState.dispatch(new LoadItems());
  }

  // optimistic update
  // 1. update UI state
  // 2. call API
  addItem(item: Item) {
    this.itemsState.dispatch(new AddItem(item));
  }

  // pessimistic update
  // 1. call API
  // 2. update UI state
  updateItem(item: Item) {
    this.itemsState.dispatch(new UpdateItem(item));
  }

  deleteItem(item: Item) {
    this.itemsState.dispatch(new DeleteItem(item));
  }

}
