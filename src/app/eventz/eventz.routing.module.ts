import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventzComponent } from './eventz.component';

const routes: Routes =[
  {path:'',component: EventzComponent }
];


@NgModule({
  imports:      [ RouterModule.forChild(routes) ],
  exports: [  RouterModule ],
})
export class EventzRoutingModule {}