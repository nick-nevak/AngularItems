import { Action } from '@ngrx/store';
import { Item } from 'src/app/items/models/item';
import { createActionType } from '../../shared/utils';

export const ADD_ITEM = createActionType('ADD_ITEM');
export const ADD_ITEM_SUCCESS = createActionType('ADD_ITEM_SUCCESS');
export const DELETE_ITEM = createActionType('DELETE_ITEM');
export const DELETE_ITEM_SUCCESS = createActionType('DELETE_ITEM_SUCCESS');
export const LOAD_ITEMS = createActionType('LOAD_ITEMS');
export const LOAD_ITEMS_SUCCESS = createActionType('LOAD_ITEMS_SUCCESS');
export const LOAD_ITEM = createActionType('LOAD_ITEM');
export const LOAD_ITEM_SUCCESS = createActionType('LOAD_ITEM_SUCCESS');
export const SELECT_ITEM = createActionType('SELECT_ITEM');
export const UPDATE_ITEM = createActionType('UPDATE_ITEM');
export const UPDATE_ITEM_SUCCESS = createActionType('UPDATE_ITEM_SUCCESS');

export class AddItem implements Action {
  readonly type = ADD_ITEM;

  constructor(public payload: Item) {
  }
}

export class AddItemSuccess implements Action {
  readonly type = ADD_ITEM_SUCCESS;

  constructor(public payload: Item) {
  }
}

export class DeleteItem implements Action {
  readonly type = DELETE_ITEM;

  constructor(public payload: Item) {
  }
}

export class DeleteItemSuccess implements Action {
  readonly type = DELETE_ITEM_SUCCESS;

  constructor(public payload: Item) {
  }
}

export class LoadItems implements Action {
  readonly type = LOAD_ITEMS;
}

export class LoadItemsSuccess implements Action {
  readonly type = LOAD_ITEMS_SUCCESS;

  constructor(public payload: Item[]) {
  }
}

export class LoadItem implements Action {
  readonly type = LOAD_ITEM;

  constructor(public payload: { id: number }) {
  }
}

export class LoadItemSuccess implements Action {
  readonly type = LOAD_ITEM_SUCCESS;

  constructor(public payload: Item) {
  }
}

export class SelectItem implements Action {
  readonly type = SELECT_ITEM;

  constructor(public payload: { id: number }) {
  }
}

export class UpdateItem implements Action {
  readonly type = UPDATE_ITEM;

  constructor(public payload: Item) {
  }
}

export class UpdateItemSuccess implements Action {
  readonly type = UPDATE_ITEM_SUCCESS;

  constructor(public payload: Item) {
  }
}

export type ItemsAction =
  AddItem
  | AddItemSuccess
  | DeleteItem
  | DeleteItemSuccess
  | LoadItems
  | LoadItemsSuccess
  | LoadItem
  | LoadItemSuccess
  | SelectItem
  | UpdateItem
  | UpdateItemSuccess;
