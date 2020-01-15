import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {
  ADD_ITEM_SUCCESS, DELETE_ITEM_SUCCESS, LOAD_ITEM_SUCCESS, LOAD_ITEMS_SUCCESS, ItemsAction, SELECT_ITEM,
  UPDATE_ITEM_SUCCESS
} from '../actions/items';
import { Item } from 'src/app/items/models/item';

export interface State extends EntityState<Item> {
  selectedItemId: number;
}

export const adapter: EntityAdapter<Item> = createEntityAdapter();

const initialState: State = adapter.getInitialState({
  selectedItemId: null
});

export function reducer(state: State = initialState, action: ItemsAction) {
  switch (action.type) {
    case ADD_ITEM_SUCCESS:
      return adapter.addOne(action.payload, state);
    case DELETE_ITEM_SUCCESS:
      return adapter.removeOne(action.payload.id, state);
    case LOAD_ITEM_SUCCESS:
      return adapter.addOne(action.payload, state);
    case LOAD_ITEMS_SUCCESS:
      return adapter.addMany(action.payload, state);
    case SELECT_ITEM:
      return { ...state, selectedItemId: action.payload.id };
    case UPDATE_ITEM_SUCCESS:
      return adapter.updateOne({
        id: action.payload.id,
        changes: action.payload
      }, state);
    default:
      return state;
  }
}

export const getSelectedItemId = (state: State) => state.selectedItemId;
