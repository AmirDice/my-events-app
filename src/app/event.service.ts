import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from 'src/app/event';
import { lastValueFrom } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    // 'X-Requested-With': 'XMLHttpRequest',
  })
};

@Injectable({
  providedIn: 'root'
})
export class EventService {


  constructor(private http: HttpClient){}

  private eventsUrl = 'http://127.0.0.1:8000/api/events';

async getEvents(){
  return await lastValueFrom(this.http.get<Event[]>(this.eventsUrl))
}

async getEvent(id: number){
  return await lastValueFrom(this.http.get<Event>(`${this.eventsUrl}/${id}`));
}

async updateEvent(id: number, modifiedEvent: Event){
  return await lastValueFrom(this.http.patch<Event>((`${this.eventsUrl}/${id}`), modifiedEvent, httpOptions));
}

async addEvent(newEvent: Event){
  return await lastValueFrom(this.http.post<Event>(this.eventsUrl, newEvent, httpOptions));
}

async deleteEvent(id: number){
  return await lastValueFrom(this.http.delete<null>((`${this.eventsUrl}/${id}`), httpOptions));

}
}
