import { eventsReducer, getEvents } from './events.reducer';
import * as eventsApiAction from '../actions/events-api.action';
import { IEvent } from 'src/app/model/model';

describe('eventsReducer', () => {
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

    it('should set getting events', () => {
        expect(eventsReducer(({ events: [] }), eventsApiAction.getEventsSuccessful({
            events: mockEvents
        }))).toEqual({
            events: mockEvents
        });
    });

    it('should set add event', () => {
        const mockEvent: IEvent = {
            name: 'event 1',
            address: 'USA, NY',
            date: new Date()
        };

        expect(eventsReducer(({ events: [] }), eventsApiAction.addEventSuccessful({
            event: mockEvent
        }))).toEqual({
            events: [mockEvent]
        });
    });

    it('should get events', () => {
        expect(getEvents({ events: mockEvents })).toEqual(mockEvents);
    });
});
