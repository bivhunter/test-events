import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEvents from '../reducers/events.reducer';

export const getEventsState = createFeatureSelector<fromEvents.State>('eventsState');

export const getEvents = createSelector(
    getEventsState,
    (state) => state.events
);

