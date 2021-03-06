import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  @Input() title: string;
  @Input() date: string;
  @Input() hour: string;
  adultTicket = 0;
  childrenTicket = 0;
  familyTicket = 0;
  adultPrice = 33;
  childrenPrice = 18;
  familyPrice = 100;
  totalPrice = 0;
  display = true;
  selectedSeat = [];
  totalTicket = 0;
  rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',];
  cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  reserved = ['A2', 'A3', 'F5', 'F1', 'F2', 'F6', 'F7', 'F8', 'H1', 'H2', 'H3', 'H4'];
  selected = [];
  index = 0;

  firstLetter = null;
  secondLetter = 0;
  newSecondLetter = 0;
  

  
  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }
  
  getStatus(seatPos: string) {
    if (this.reserved.indexOf(seatPos) !== -1) {
      return 'reserved';
    } else if (this.selected.indexOf(seatPos) !== -1) {
      return 'selected';
    }
  }

  chooseMember(item: string) {
    if (item === 'family') {
      this.familyTicket = 1;
      this.adultTicket = 0;
      this.childrenTicket = 0;
    }
    else if (item === 'adult') {
      this.adultTicket = ++this.adultTicket <= 5 ? this.adultTicket : 5;
    } else {
      if (this.adultTicket > 0) {
        this.childrenTicket = ++this.childrenTicket <= 4 ? this.childrenTicket : 4;
      }
    }
    this.calculateTotal();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.title = params['title'];
      this.date = params['date'];
      this.hour = params['hour'];
      console.log(this.title + this.date + this.hour);
    });
  }

  removeMember(item: string) {
    if (item === 'family') {
      this.familyTicket = 0;
    }
    else if (item === 'adult') {
      this.adultTicket = --this.adultTicket >= 0 ? this.adultTicket : 0;

      if (this.adultTicket === 0) {
        this.childrenTicket = 0;
      }
    } else {

      this.childrenTicket = --this.childrenTicket >= 0 ? this.childrenTicket : 0;

    }
    this.calculateTotal();
  }
  
  calculateTotal() {
    if (this.familyTicket === 1) {
      this.totalPrice = this.familyPrice;
    } else {
      this.totalPrice = (this.adultPrice * this.adultTicket) + (this.childrenTicket * this.childrenPrice);
    }
  }

  showseat(adultPicked: number, childrenPicked: number, familyPicked: number) {
    this.clearSeat();
    this.adultTicket = adultPicked;
    this.childrenTicket = childrenPicked;
    this.familyTicket = familyPicked;
    if (this.adultTicket !== 0 || this.familyTicket !== 0) {
      this.display = false;
    }
    else {
      this.display = true;
    }
  }

  chosenSeat(item: string) {

    if (this.familyTicket === 1) {
      this.totalTicket = 6;
      if (this.selectedSeat.length < this.totalTicket) {
        this.selectedSeat.push(item);
        this.firstLetter = this.selectedSeat[0].charAt(0);
        this.secondLetter = +(this.selectedSeat[0].charAt(1) + this.selectedSeat[0].charAt(2));

        if (this.secondLetter === 10) {
          for (let i = 1; i < this.totalTicket; i++) {
            this.selectedSeat.push(this.firstLetter + (this.secondLetter - i));
          }
        }
        else if (this.secondLetter !== 10) {
          for (let i = 1; i < this.totalTicket; i++) {
            if ( this.secondLetter + i < 11) {
              this.newSecondLetter = this.secondLetter +i;
              this.selectedSeat.push(this.firstLetter + (this.newSecondLetter));
            }
            else {
              this.selectedSeat.push(this.firstLetter + (this.newSecondLetter - i));
            }
          }
        }
      }
    } else if (this.adultTicket > 0) {
      this.totalTicket = this.adultTicket + this.childrenTicket;
      if (this.selectedSeat.length < this.totalTicket) {
        this.selectedSeat.push(item);
        this.firstLetter = this.selectedSeat[0].charAt(0);
        this.secondLetter = +(this.selectedSeat[0].charAt(1) + this.selectedSeat[0].charAt(2));
        if (this.secondLetter === 10) {
          for (let i = 1; i < this.totalTicket; i++) {
            this.selectedSeat.push(this.firstLetter + (this.secondLetter - i));
          }
        }
        else if (this.secondLetter !== 10) {
          for (let i = 1; i < this.totalTicket; i++) {
            if ( this.secondLetter + i < 11) {
              this.newSecondLetter = this.secondLetter +i;
              this.selectedSeat.push(this.firstLetter + (this.newSecondLetter));
            }
            else {
              this.selectedSeat.push(this.firstLetter + (this.newSecondLetter - i));
            }
          }
        }

      }
    }
    console.log(this.selectedSeat);
  }


  checkOut() {
    if (this.selectedSeat.length === this.totalTicket) {
      this.router.navigateByUrl('/checkout/'+this.title+'/'+this.date+'/'+this.hour+'/'+this.selectedSeat+'/'+this.totalPrice);
    } else {
      alert('Please select all seat');
    }
  }

  clearSeat() {
    this.selectedSeat = [];
  }

}
