import { NgModule } from '@angular/core';
 
import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule
  } from '@angular/material'; 

@NgModule({
  imports: [ ],

  exports: [  
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule ,
    MatSidenavModule
  ],
})
export class MatCompModule {}