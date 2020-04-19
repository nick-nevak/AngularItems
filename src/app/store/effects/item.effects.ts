
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { GetItems, ItemActionTypes, GetItemsSuccess } from '../actions/item.actions';
import { ItemsApi } from 'src/app/items/api/items.api';
import { Item } from 'src/app/items/models/item';


@Injectable()
export class ItemEffects {

  constructor(
    private itemsApi: ItemsApi,
    private _actions$: Actions) { }

  @Effect()
  getItems$ = this._actions$.pipe(
    ofType<GetItems>(ItemActionTypes.GetItems),
    switchMap(() => this.itemsApi.getItems()),
    map((items: Item[]) => new GetItemsSuccess(items))
  );
}
