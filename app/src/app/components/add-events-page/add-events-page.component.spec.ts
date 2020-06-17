import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventsPageComponent } from './add-events-page.component';
import { MAT_DATE_LOCALE, DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { StoreModule, Store } from '@ngrx/store';
import { reducers } from 'src/app/modules/feature/reducers';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IEvent } from 'src/app/model/model';

describe('AddEventsPageComponent', () => {
  let component: AddEventsPageComponent;
  let fixture: ComponentFixture<AddEventsPageComponent>;
  let store: Store;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddEventsPageComponent],
      providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
        DateAdapter,
        Store,
      ],
      imports: [
        MatNativeDateModule,
        RouterTestingModule,
        StoreModule.forRoot(reducers, {}),
        RouterModule.forRoot([]),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventsPageComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);
    spy = spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call store', () => {
    component.onSubmit();
    expect(spy.calls.any()).toBeTruthy();
  });

  it('should set event from form', () => {
    const mockEvent: IEvent = {
      name: 'event 1',
      address: 'USA, NY',
      date: new Date()
    };
    component.form.setValue(mockEvent);
    component.onSubmit();
    expect(component.event).toEqual(mockEvent);
  });
});
