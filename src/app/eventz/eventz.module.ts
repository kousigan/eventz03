import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventzComponent } from './eventz.component';
import { FormsModule } from '@angular/forms';
import { EventzRoutingModule } from './eventz.routing.module';
import { MatCompModule } from './matComp.module';
import { EventzService } from './eventz.service';

import { HomeComponent } from './comp/home/home.component';
import { AddEventComponent } from './comp/add-event/add-event.component';
import { ViewEventComponent } from './comp/view-event/view-event.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCompModule,
    EventzRoutingModule
  ],
  declarations: [
    EventzComponent,
    HomeComponent,
    AddEventComponent,
    ViewEventComponent
  ],
  providers: [
    EventzService
  ]
})
export class EventzModule { }