import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { AppState } from '../state/app.state';
import { itemReducers } from './item.reducers';
;

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  items: itemReducers
};
