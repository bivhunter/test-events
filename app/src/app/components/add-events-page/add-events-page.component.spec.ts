import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventsPageComponent } from './add-events-page.component';
import { MAT_DATE_LOCALE, DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { StoreModule, Store } from '@ngrx/store';
import { reducers } from 'src/app/modules/feature/reducers';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddEventsPageComponent', () => {
  let component: AddEventsPageComponent;
  let fixture: ComponentFixture<AddEventsPageComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
