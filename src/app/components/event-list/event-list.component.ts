import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/event';
import { EventService } from 'src/app/event.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  public events: Event[] = [];
  public selectedEvent: Event | null = null;

  constructor(private eventService: EventService) { }

  async ngOnInit() {
    this.events = await this.eventService.getEvents();
  }

  handleSave(event: Event){
    Object.assign(this.selectedEvent, event);
    this.selectedEvent = null;
  }

}
