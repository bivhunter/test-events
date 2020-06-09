import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IEvent } from 'src/app/model/model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const events: IEvent[] = [
      {
        id: 1,
        name: 'event 1',
        address: 'USA, NY',
        date: new Date()
      },
      {
        id: 2,
        name: 'event 2',
        address: 'USA, NY',
        date: new Date()
      }
    ];
    return { events };
  }

  genId(events: IEvent[]): number {
    return events.length > 0 ? Math.max(...events.map(event => event.id)) + 1 : 1;
  }
}
