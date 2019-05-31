import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventzComponent } from './eventz.component';

import { EventzRoutingModule } from './eventz.routing.module';
import { MatCompModule } from './matComp.module';
import { EventzService } from './eventz.service';

import { HomeComponent } from './comp/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    MatCompModule,
    EventzRoutingModule
  ],
  declarations: [
    EventzComponent,
    HomeComponent
  ],
  providers: [
    EventzService
  ]
})
export class EventzModule { }