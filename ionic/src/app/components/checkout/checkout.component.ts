import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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



  constructor(private dataService: DataService,private route: ActivatedRoute,  private alertContrl: AlertController) { }

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
      inputs: [
        {
          name: 'Firstname',
          placeholder: 'Name',
          type: 'text'
        },
        {
          name: 'Lastname',
          placeholder: 'Lastname',
          type: 'text'
        },
        {
          name: 'Email',
          placeholder: 'Email',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Save',
          handler: (res) => {
            this.dataService.addEvents({ 
              Email: res.Email,
              Firstname: res.Firstname,
              Lastname: res.Lastname,
              Totalprice: res.Totalprice,
              Title: res.Title,
              Date: res.Date,
              Hour: res.Hour
            });
          }
        }
      ]

    });
    await alert.present();

}
}
