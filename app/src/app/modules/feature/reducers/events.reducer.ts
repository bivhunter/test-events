import { IEvent } from '../../../model/model';
import { createReducer, on } from '@ngrx/store';
import * as eventsApiAction from '../actions/events-api.action';


export interface State {
    events: IEvent[];
}

export const initState: State = {
    events: [],
};

export const eventsReducer = createReducer(
    initState,
    on(eventsApiAction.getEventsSuccessful, (state, { events }) => {
        return {
            events
        };
    }),
    on(eventsApiAction.addEventSuccessful, (state, { event }) => {
        return {
            ...state,
            events: [...state.events, event]
        };
    })
);


// for selectors
export const getEvents = (state: State) => state.events;
