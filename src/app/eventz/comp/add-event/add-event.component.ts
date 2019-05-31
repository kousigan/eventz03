import { Component, OnInit } from '@angular/core';
import { EventzService } from  '../../eventz.service'; 
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  newEvent: FEvent={eventName:null,eventDesc:null};
  success;
  error;
  constructor(private eventz:EventzService) { }

  ngOnInit() {
  }

  updateEvent(){
    if(this.newEvent.eventName !== null){
      console.log( this.eventz.addEvent(this.newEvent));
    }
    else{

    }
  }

}

export interface FEvent {
  eventName:string;
  eventDesc:string;
}