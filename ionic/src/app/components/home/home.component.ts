import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent{

  events = [];

  constructor(private dataService: DataService, public router: Router) {
    this.dataService.getEvents().subscribe(res => {
      this.events = res;
    });


  }

}
