import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventzComponent } from './eventz.component';

import { EventzRoutingModule } from './eventz.routing.module';

@NgModule({
  imports: [
    CommonModule,
    EventzRoutingModule
  ],
  declarations: [
    EventzComponent
  ]
})
export class EventzModule { }