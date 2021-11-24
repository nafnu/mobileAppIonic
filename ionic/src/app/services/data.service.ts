import { Injectable } from '@angular/core';
import { collectionData, Firestore, doc } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { docData } from 'rxfire/firestore';
import { Observable } from 'rxjs';

export interface Event{
  description: string,
  //hour: string,
  id?: string,
  image: string,
  //price: number,
  title: string
}

export interface PricesDates{
  //description: string,
  hour1: string,
  hour2: string,
  id?: string,
  //image: string,
  priceA: number,
  priceCh: number,
  priceF: number,
  priceSn: number,
  priceSt: number,
  date1: string,
  date2: string,
  date3: string,
  date4: string,
  //title: string
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

    getPricesDates():Observable<Event[]> {
      const eventRef = collection(this.firestore, 'schedule&price');
      return collectionData(eventRef, {idField: 'id'}) as Observable<Event[]>

    }

    getPricesDatesById(id): Observable<Event> {

      const eventDoRef = doc(this.firestore, 'schedule&price');
      return docData(eventDoRef, { idField: 'id'}) as Observable<Event>
    }
  }

