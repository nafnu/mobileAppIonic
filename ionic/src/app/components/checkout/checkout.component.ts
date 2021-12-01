import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) { }

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
    // this.getLastname = lastName;
    // this.getEmail = email;
    //console.log(this.getFirstname + this.getLastname + this.getEmail);
    //save in firebase 
    this.getFirstname = document.querySelector<HTMLInputElement>('input[name="userFirstname"]').value;
    this.getLastname = document.querySelector<HTMLInputElement>('input[name="userLirstname"]').value;
    this.getEmail = document.querySelector<HTMLInputElement>('input[name="userEmail"]').value;
    console.log(this.getFirstname);
  }

}
