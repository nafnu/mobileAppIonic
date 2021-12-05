import { Injectable } from '@angular/core';
import { collectionData, Firestore, doc, getFirestore, addDoc, collection, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { docData } from 'rxfire/firestore';
import { Observable, BehaviorSubject} from 'rxjs';


export interface Event {
  description: string,
  id?: string,
  image: string,
  price: {adult: number, familiar: number, senior: number, student: number},
  title: string,
  runningTimes: runningTimes
}

export interface runningTimes {
  date1: string, datehour1: string[], 
  date2: string, datehour2: string[],
  date3: string, datehour3: string[],
  date4: string, datehour4: string[]
}

export interface Event2 {
  id?: string,
  Email: string,
  Firstname: string,
  Lastname: string,
  Totalprice: string,
  Title: string,
  Date: string,
  Hour: string,
 SelectedSeat:  string[]

 
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getEvents(): Observable<Event[]> {
    const eventRef = collection(this.firestore, 'whatson');
    return collectionData(eventRef, { idField: 'id' }) as Observable<Event[]>;
  }

  getEventById(id): Observable<Event> {
    const eventRef = doc(this.firestore, `whatson/${id}`);
    return docData(eventRef, { idField: 'id' }) as Observable<Event>;
  }


  getEvents2(): Observable<Event2[]> {
    const eventRef = collection(this.firestore, 'checkout');
    return collectionData(eventRef, { idField: 'id' }) as Observable<Event2[]>;
  }

  getEvent2ById(id): Observable<Event2> {
    const eventDocRef = doc(this.firestore, `checkout/${id}`);
    return docData(eventDocRef, { idField: 'id' }) as Observable<Event2>;
  }

  addEvents(event2: Event2){
    const eventRef = collection(this.firestore, 'checkout');
    return addDoc(eventRef,event2);
  }

  deleteEvents(event2: Event2){
    const eventDocRef = doc(this.firestore, `checkout/${event2.id}`);
    return deleteDoc(eventDocRef);
  }

  updateEvents(event2: Event2){
    const eventDocRef = doc(this.firestore, `checkout/${event2.id}`);
    return updateDoc(eventDocRef, { email:event2.Email, firstname:event2.Firstname });
  }


  
}

