import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
 

import { AppRoutingModule } from './app.routing.module';
import { EventzModule } from './eventz/eventz.module';

 
@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule,  AppRoutingModule,
   ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
