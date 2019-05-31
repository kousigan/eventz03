import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs'; 

@Injectable()
export class EventzService {

 EventList = new BehaviorSubject(null);

  constructor(private fstore: AngularFirestore ) { 
    this.getStud().subscribe(actionArray => {
      let list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as any;
        
      })
      this.EventList.next(list);
    });
  }
  getStud(){
    return  this.fstore.collection('eventz').snapshotChanges()
  }

  addStud(stud){
    return this.fstore.collection('stud').add(stud);
  }

  addEvent(event){
    return this.fstore.collection('eventz').add(event);
  }
}