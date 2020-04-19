
import { Action } from '@ngrx/store';
import { Item } from 'src/app/items/models/item';

export enum ItemActionTypes {
    GetItems = '[Item] Get Items',
    GetItemsSuccess = '[Item] Get Items Success',
  }
  
  export class GetItems implements Action {
    public readonly type = ItemActionTypes.GetItems;
  }
  
  export class GetItemsSuccess implements Action {
    public readonly type = ItemActionTypes.GetItemsSuccess;
    constructor(public payload: Item[]) {}
  }

  export type ItemActions = GetItems | GetItemsSuccess;