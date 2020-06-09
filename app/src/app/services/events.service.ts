import { Injectable } from '@angular/core';
import { IEvent } from '../model/model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EventsService {

  private eventsUrl = 'api/events';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.eventsUrl);
  }

  addEvent(event: IEvent): Observable<IEvent> {
    return this.http
      .post<IEvent>(this.eventsUrl, event, this.httpOptions);
  }
}
