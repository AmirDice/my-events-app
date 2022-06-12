import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { Event } from 'src/app/event';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  event: Event = new Event();

  constructor(private route: ActivatedRoute, private eventService: EventService, private router : Router) { }

  async ngOnInit(){
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    const event = await this.eventService.getEvent(id);
    if(event) {
      this.event = event;
    }

  }
  async handleDelete(){
    await this.eventService.deleteEvent(this.event.id)
    this.router.navigate(['/events'])
  }

}
   