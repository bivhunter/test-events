import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { IEvent } from '../../model/model';
import { MAT_DATE_LOCALE, DateAdapter } from '@angular/material/core';
import { Store } from '@ngrx/store';
import * as eventAction from 'src/app/modules/feature/actions/events.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-events-page',
  templateUrl: './add-events-page.component.html',
  styleUrls: ['./add-events-page.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ]
})
export class AddEventsPageComponent implements OnInit {

  form: FormGroup;
  event: IEvent = {
    name: '',
    address: '',
    date: null
  };

  constructor(
    private adapter: DateAdapter<any>,
    private store: Store,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.adapter.setLocale('en-GB');
    this.initForm();
    this.initFormSubscription();
  }

  onSubmit(): void {
    this.store.dispatch(eventAction.addEvent({ event: this.event }));
    this.route.navigateByUrl('/home');
  }

  private initFormSubscription() {
    this.form.valueChanges.subscribe(
      (value: IEvent) => {
        this.event = {
          ...this.event,
          ...value
        };
      }
    );
  }

  private initForm(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required, dateValidator()])
    });
  }
}

function dateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return Date.parse(control.value) ? null : { dateValidator: true };
  };
}
