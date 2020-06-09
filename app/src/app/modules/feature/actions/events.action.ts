import { createAction, props } from '@ngrx/store';
import { IEvent } from 'src/app/model/model';

export const getEvents = createAction(
    '[Events] Get Events'
);

export const addEvent = createAction(
    '[Events] Add Event',
    props<{ event: IEvent }>()
);





