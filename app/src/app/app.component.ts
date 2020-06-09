import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as eventAction from 'src/app/modules/feature/actions/events.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test';

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(eventAction.getEvents());
  }
}
