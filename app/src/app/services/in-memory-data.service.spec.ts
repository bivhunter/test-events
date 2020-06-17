import { TestBed } from '@angular/core/testing';

import { InMemoryDataService } from './in-memory-data.service';
import { IEvent } from '../model/model';

describe('InMemoryDataService', () => {
  let service: InMemoryDataService;
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

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return id===1', () => {
    expect(service.genId([])).toBe(1);
  });

  it('should be return id===3', () => {
    expect(service.genId(mockEvents)).toBe(3);
  });

  it('should be created DB', () => {
    expect(service.createDb()).toBeTruthy();
  });
});
