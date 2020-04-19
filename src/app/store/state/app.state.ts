import { RouterReducerState } from '@ngrx/router-store';
import { initialItemState, ItemState } from './item.state';


export interface AppState {
  router?: RouterReducerState;
  items: ItemState;
}

export const initialAppState: AppState = {
  items: initialItemState
};

export function getInitialState(): AppState {
  return initialAppState;
}
