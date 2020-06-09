import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromEvents from './events.reducer';

import { environment } from '../../../../environments/environment';

export interface State {
  eventsState: fromEvents.State;
}

export const reducers: ActionReducerMap<State> = {
  eventsState: fromEvents.eventsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
