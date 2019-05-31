import { Component, OnInit } from '@angular/core';
import { EventzService } from './eventz.service';

@Component({
  selector: 'app-eventz',
  templateUrl: './eventz.component.html',
  styleUrls: ['./eventz.component.css']
})
export class EventzComponent implements OnInit {

  constructor(private eventz:EventzService) { }

  ngOnInit() {
     
  }

}