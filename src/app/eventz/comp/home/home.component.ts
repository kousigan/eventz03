import { Component, OnInit } from '@angular/core';
import { EventzService } from  '../../eventz.service'; 
import { Subscription } from 'rxjs'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subs:Subscription;
  EventList;
  constructor(private eventz:EventzService, private router: Router) { 
    this.subs = this.eventz.EventList.subscribe(i =>{
      this.EventList = i;
      console.log(this.EventList)
    });
  }
  viewEvent(i){
    console.log(i)
  this.router.navigate(['eventz/viewevent'],{queryParams:{id:i}})
   }
  ngOnInit() {
  }

}