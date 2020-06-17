import { TestBed } from '@angular/core/testing';

import { EventsService } from './events.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { IEvent } from '../model/model';

describe('EventsService', () => {
  let service: EventsService;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [HttpClient]
    });
    service = TestBed.inject(EventsService);
    backend = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be get events', () => {
    const mockEvents: IEvent[] = [
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

    service.getEvents().subscribe(
      events => expect(events).toEqual(mockEvents)
    );

    backend.expectOne({
      method: 'GET',
      url: 'api/events'
    }).flush(
      mockEvents
    );
  });

  it('should be add event', () => {
    const mockEvent: IEvent = {
      id: 1,
      name: 'event 1',
      address: 'USA, NY',
      date: new Date()
    };

    service.addEvent(mockEvent).subscribe(
      event => expect(event).toEqual(mockEvent)
    );

    backend.expectOne({
      method: 'POST',
      url: 'api/events'
    }).flush(
      mockEvent
    );
  });
});
