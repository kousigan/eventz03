import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
  

import { AppRoutingModule } from './app.routing.module';
import { EventzModule } from './eventz/eventz.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAsXX0hPEcbBUoswaV_D8fbJWahDrcICiU",
    authDomain: "inkcms-b1038.firebaseapp.com",
    databaseURL: "https://inkcms-b1038.firebaseio.com",
    projectId: "inkcms-b1038",
    storageBucket: "inkcms-b1038.appspot.com",
    messagingSenderId: "758999965779"
  }
};

 
@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
   ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
