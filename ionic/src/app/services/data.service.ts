import { Injectable } from '@angular/core';
import { collectionData, Firestore, doc } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { docData } from 'rxfire/firestore';
import { Observable } from 'rxjs';

export interface Event{
  description: string,
  hour: string,
  id?: string,
  image: string,
  price: number,
  title: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }
    
    getEvents():Observable<Event[]> {
      const eventRef = collection(this.firestore, 'whatson');
      return collectionData(eventRef, {idField: 'id'}) as Observable<Event[]>

    }

    getEventById(id): Observable<Event> {

      const eventDoRef = doc(this.firestore, 'events/${id}');
      return docData(eventDoRef, { idField: 'id'}) as Observable<Event>
    }

  }

