import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventzComponent } from './eventz.component';
import { HomeComponent } from './comp/home/home.component';

const routes: Routes =[
  {path:'',component: EventzComponent,
  children:[
     {path:'home',component: HomeComponent},
  ] }

];


@NgModule({
  imports:      [ RouterModule.forChild(routes) ],
  exports: [  RouterModule ],
})
export class EventzRoutingModule {}