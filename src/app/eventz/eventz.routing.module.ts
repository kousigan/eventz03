import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventzComponent } from './eventz.component';
import { HomeComponent } from './comp/home/home.component';
import { AddEventComponent } from './comp/add-event/add-event.component';
import { ViewEventComponent } from './comp/view-event/view-event.component';


const routes: Routes =[
  {path:'',component: EventzComponent,
  children:[
     {path:'home',component: HomeComponent},
     {path:'addevent',component: AddEventComponent},
     {path:'viewevent',component: ViewEventComponent},
  ] }

];


@NgModule({
  imports:      [ RouterModule.forChild(routes) ],
  exports: [  RouterModule ],
})
export class EventzRoutingModule {}