import { createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { ItemState } from '../state/item.state';

const selectItems = (state: AppState) => state.items;

export const selectItemsList = createSelector(
  selectItems,
  (state: ItemState) => state.items
);
