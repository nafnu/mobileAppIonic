import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  events = [];

  events2 = [];

  constructor(private dataService: DataService, public router: Router, private alertContrl: AlertController) {
    this.dataService.getEvents().subscribe(res => {
      this.events = res;
    });
    this.dataService.getEvents2().subscribe(res => {
        console.log(res);
        this.events2 = res;
      })
    }

}
