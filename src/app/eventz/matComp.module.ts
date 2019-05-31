import { NgModule } from '@angular/core';
 
import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatTreeModule,
  MatCardModule
  } from '@angular/material'; 

@NgModule({
  imports: [ ],

  exports: [  
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule ,
    MatSidenavModule,
    MatTreeModule,
    MatCardModule
  ],
})
export class MatCompModule {}