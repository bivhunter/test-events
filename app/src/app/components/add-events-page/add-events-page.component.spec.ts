import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventsPageComponent } from './add-events-page.component';

describe('AddEventsPageComponent', () => {
  let component: AddEventsPageComponent;
  let fixture: ComponentFixture<AddEventsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventsPageComponent ]
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
