import { Injectable } from '@angular/core';
import { collectionData, Firestore, doc, getFirestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
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


}

