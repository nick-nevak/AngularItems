import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import * as fromItems from './items';

export interface ItemsState {
  items: fromItems.State;
}

export interface State extends AppState {
  items: ItemsState;
}

export const reducers = {
  items: fromItems.reducer
};

export const getItemsState = createFeatureSelector<ItemsState>('items');

export const getItemsEntityState = createSelector(
  getItemsState,
  (state) => state.items
);

export const {
  selectAll: getAllItems,
  selectEntities: getItemEntities,
  selectIds: getItemIds,
  selectTotal: getItemsTotal
} = fromItems.adapter.getSelectors(getItemsEntityState);

export const getSelectedItemId = createSelector(
  getItemsEntityState,
  fromItems.getSelectedItemId
);

export const getSelectedItem = createSelector(
  getItemEntities,
  getSelectedItemId,
  (entities, selectedItemId) => selectedItemId && entities[selectedItemId]
);
