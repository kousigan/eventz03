import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  constructor(private  activeR:ActivatedRoute) { }

  ngOnInit() {
    this.activeR.queryParams.subscribe(r =>{
      console.log(r)
    })
  }

}