import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { Event } from 'src/app/event';
import { Location } from '@angular/common';


@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {
  event: Event = new Event();

  constructor(private route: ActivatedRoute, private eventService: EventService, private location: Location, private router: Router) { }

  async ngOnInit() {
    const urlId = (this.route.snapshot.paramMap.get('id'));
    if (urlId){
      const id = parseInt(urlId);
      const event = await this.eventService.getEvent(id);
      if(event) {
        this.event = event;


    }
    
  }

  }

  async handleSave(event: Event){
  if (this.event.id){
    await this.eventService.updateEvent(this.event.id, event);
    this.location.back();
  }
    else{
      const newEvent = await this.eventService.addEvent(event);
      this.router.navigate(['/events']);
    }

  }
}
