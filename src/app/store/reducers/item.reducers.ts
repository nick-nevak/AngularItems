

import { ItemActions, ItemActionTypes } from '../actions/item.actions';
import { initialItemState, ItemState } from '../state/item.state';

export const itemReducers = (
  state = initialItemState,
  action: ItemActions
): ItemState => {
  switch (action.type) {
    case ItemActionTypes.GetItemsSuccess: {
      return {
        ...state,
        items: action.payload
      };
    }

    default:
      return state;
  }
};
