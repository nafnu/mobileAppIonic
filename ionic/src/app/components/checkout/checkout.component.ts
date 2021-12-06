import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})


export class CheckoutComponent implements OnInit {

  @Input() title: string;
  @Input() date: string;
  @Input() hour: string;
  @Input() selectedSeat: string[];
  @Input() totalPrice: string;
  getFirstname: string;
  getLastname: string;
  getEmail: string;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router, private alertContrl: AlertController) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.title = params['title'];
      this.date = params['date'];
      this.hour = params['hour'];
      this.selectedSeat = params['selectedSeat'];
      this.totalPrice = params['totalPrice'];
      console.log(this.title + this.date + this.hour + JSON.stringify(this.selectedSeat) + this.totalPrice);
    });
  }


  async addEvents() {
    const alert = await this.alertContrl.create({
      header: 'Confirm Order',
      message: 'I agree to the Terms & Conditions',
      
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Save',
          handler: () => {
            this.dataService.addEvents({
              Firstname: this.getFirstname = (document.querySelector<HTMLInputElement>('input[name="userFirstname"]').value),
              Email: this.getEmail = (document.querySelector<HTMLInputElement>('input[name="userEmail"]').value),
              Lastname: this.getEmail = (document.querySelector<HTMLInputElement>('input[name="userEmail"]').value),
              Totalprice: this.totalPrice,
              Title: this.title,  
              Date: this.date,
              Hour: this.hour,
              SelectedSeat: this.selectedSeat
            });
            // this.router.navigate(['home'], { relativeTo: this.route }); Error to return home
          }
        }
      ]

    });
    await alert.present();

  }
}
