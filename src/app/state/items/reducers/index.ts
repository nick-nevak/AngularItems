import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../app.interface';
import * as fromItems from './items';

export interface PowersState {
  powers: fromItems.State;
}

export interface State extends AppState {
  powers: PowersState;
}

export const reducers = {
  powers: fromItems.reducer
};

export const getPowersState = createFeatureSelector<PowersState>('powers');

export const getPowersEntityState = createSelector(
  getPowersState,
  (state) => state.powers
);

export const {
  selectAll: getAllPowers,
  selectEntities: getPowerEntities,
  selectIds: getPowerIds,
  selectTotal: getPowersTotal
} = fromItems.adapter.getSelectors(getPowersEntityState);

export const getSelectedPowerId = createSelector(
  getPowersEntityState,
  fromItems.getSelectedPowerId
);

export const getSelectedPower = createSelector(
  getPowerEntities,
  getSelectedPowerId,
  (entities, selectedPowerId) => selectedPowerId && entities[selectedPowerId]
);
