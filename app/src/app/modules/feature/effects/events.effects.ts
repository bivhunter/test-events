import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as eventsAction from '../actions/events.action';
import * as eventsApiAction from '../actions/events-api.action';
import { map, exhaustMap } from 'rxjs/operators';
import { EventsService } from 'src/app/services/events.service';

@Injectable()
export class EventsEffects {

  getEvents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(eventsAction.getEvents),
      exhaustMap(() => this.eventsService.getEvents()),
      map(
        events => {
          return eventsApiAction.getEventsSuccessful({ events });
        }
      )
    );
  });

  addEvent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(eventsAction.addEvent),
      exhaustMap(({ event }) => {
        return this.eventsService.addEvent(event);
      }),
      map(event => {
        return eventsApiAction.addEventSuccessful({ event });
      })
    );
  });

  constructor(
    private actions$: Actions,
    private eventsService: EventsService,
  ) { }
}
