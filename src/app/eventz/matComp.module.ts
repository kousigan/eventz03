import { NgModule } from '@angular/core';
 
import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatTreeModule
  } from '@angular/material'; 

@NgModule({
  imports: [ ],

  exports: [  
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule ,
    MatSidenavModule,
    MatTreeModule
  ],
})
export class MatCompModule {}