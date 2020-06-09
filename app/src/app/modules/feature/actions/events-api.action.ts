import { createAction, props } from '@ngrx/store';
import { IEvent } from 'src/app/model/model';

export const getEventsSuccessful = createAction(
    '[Events] Get Events Successful',
    props<{ events: IEvent[] }>()
);

export const addEventSuccessful = createAction(
    '[Events] Add Event Successful',
    props<{ event: IEvent }>()
);



