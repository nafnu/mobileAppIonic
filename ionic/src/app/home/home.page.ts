import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  events = [];

  constructor(private dataService: DataService) {
    this.dataService.getEvents().subscribe(res=> {
      console.log(res);
      this.events=res;
    })
  }

}
