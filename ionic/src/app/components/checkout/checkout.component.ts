import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

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



  saveData() {
    this.getFirstname = document.querySelector<HTMLInputElement>('input[name="userFirstname"]').value;
    this.getLastname = document.querySelector<HTMLInputElement>('input[name="userLirstname"]').value;
    this.getEmail = document.querySelector<HTMLInputElement>('input[name="userEmail"]').value;


  }

  async addEvents() {
    const alert = await this.alertContrl.create({
      header: 'Confirm Order',
      message: 'I agree to the Terms & Conditions',
      // inputs: [
      //   {
      //     name: 'Firstname',
      //     placeholder: 'Name',
      //     type: 'text'
      //   },
      //   {
      //     name: 'Lastname',
      //     placeholder: 'Lastname',
      //     type: 'text'
      //   },
      //   {
      //     name: 'Email',
      //     placeholder: 'Email',
      //     type: 'text'
      //   }
      // ],
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
              Title: this.title,  ///has a error
              Date: this.date,
              Hour: this.hour,
              SelectedSeat: this.selectedSeat
            });
          }
        }
      ]

    });
    await alert.present();

  }
}
