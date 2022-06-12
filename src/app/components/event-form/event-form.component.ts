import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Event } from 'src/app/event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  @Input() event = new Event
  @Output() onSave = new EventEmitter<Event>();
  public eventForm = this.fb.group({
    title: ['', [Validators.required]],
    note: ['', [Validators.required]],
    location: ['', [Validators.required]],
    date: ['', [Validators.required]],
  });
  get title() { return this.eventForm.get('title'); }
  get note() { return this.eventForm.get('note'); }
  get location() { return this.eventForm.get('location'); }
  get date() { return this.eventForm.get('date'); }
  

  constructor(
    private fb: FormBuilder
  ) { 
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.eventForm.patchValue(this.event)
  }
  
  handleSubmit(){
    this.onSave.emit(this.eventForm.value)
  }

}
