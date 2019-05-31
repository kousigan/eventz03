import { NgModule } from '@angular/core';
 
import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatTreeModule,
  MatCardModule,
  MatInputModule
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
    MatCardModule,
    MatInputModule
  ],
})
export class MatCompModule {}