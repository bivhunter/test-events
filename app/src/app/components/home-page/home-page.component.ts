import { Component, OnInit } from '@angular/core';
import { IEvent } from '../../model/model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as eventSelectors from 'src/app/modules/feature/selectors/events.selector';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  events$: Observable<IEvent[]>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.events$ = this.store.select(eventSelectors.getEvents);
  }

}
