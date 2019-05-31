import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class EventzService {

 
  constructor(private fstore: AngularFirestore ) { 
    this.getStud().subscribe(actionArray => {
      let list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as any;
        
      })
      console.log(list)
    });
  }
  getStud(){
    return  this.fstore.collection('stud').snapshotChanges()
  }

  addStud(stud){
    return this.fstore.collection('stud').add(stud);
  }
  
}