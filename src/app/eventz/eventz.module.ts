import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventzComponent } from './eventz.component';

import { EventzRoutingModule } from './eventz.routing.module';
import { MatCompModule } from './matComp.module';

@NgModule({
  imports: [
    CommonModule,
    MatCompModule,
    EventzRoutingModule
  ],
  declarations: [
    EventzComponent
  ]
})
export class EventzModule { }