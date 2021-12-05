// import { Component, Input, OnInit } from '@angular/core';
// import { DataService } from '../../services/data.service';
// import { ActivatedRoute, Router } from '@angular/router';


// @Component({
//   selector: 'app-seats',
//   templateUrl: './seats.component.html',
//   styleUrls: ['./seats.component.scss'],
// })
// export class SeatsComponent implements OnInit {

//   @Input() title: string;
//   @Input() date: string;
//   @Input() hour: string;
//   adultTicket = 0;
//   childrenTicket = 0;
//   familyTicket = 0;
//   adultPrice = 33;
//   childrenPrice = 18;
//   familyPrice = 100;
//   totalPrice = 0;
//   display = true;
//   selectedSeat = [];
//   totalTicket = 0;
//   rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',];
//   cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   reserved = ['A2', 'A3', 'F5', 'F1', 'F2', 'F6', 'F7', 'F8', 'H1', 'H2', 'H3', 'H4'];
//   selected = [];
//   index = 0;

//   firstLetter = null;
//   secondLetter = 0;
//   newSecondLetter = 0;

//   constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

//   getStatus(seatPos: string) {
//     if (this.reserved.indexOf(seatPos) !== -1) {
//       return 'reserved';
//     } else if (this.selected.indexOf(seatPos) !== -1) {
//       return 'selected';
//     }
//   }




// }

// ngOnInit() {
//   this.route.params.subscribe(params => {
//     this.title = params['title'];
//     this.date = params['date'];
//     this.hour = params['hour'];
//     this.totalPrice = params['totalPrice'];
//     console.log(this.title + this.date + this.hour);
//   });
// }

// showseat(adultPicked: number, childrenPicked: number, familyPicked: number) {
//   this.clearSeat();
//   this.adultTicket = adultPicked;
//   this.childrenTicket = childrenPicked;
//   this.familyTicket = familyPicked;
//   if (this.adultTicket !== 0 || this.familyTicket !== 0) {
//     this.display = false;
//   }
//   else {
//     this.display = true;
//   }
// }

// chosenSeat(item: string) {

//   if (this.familyTicket === 1) {
//     this.totalTicket = 6;
//     if (this.selectedSeat.length < this.totalTicket) {
//       this.selectedSeat.push(item);
//       this.firstLetter = this.selectedSeat[0].charAt(0);
//       this.secondLetter = +(this.selectedSeat[0].charAt(1) + this.selectedSeat[0].charAt(2));

//       if (this.secondLetter === 10) {
//         for (let i = 1; i < this.totalTicket; i++) {
//           this.selectedSeat.push(this.firstLetter + (this.secondLetter - i));
//         }
//       }
//       else if (this.secondLetter !== 10) {
//         for (let i = 1; i < this.totalTicket; i++) {
//           if (this.secondLetter + i < 11) {
//             this.newSecondLetter = this.secondLetter + i;
//             this.selectedSeat.push(this.firstLetter + (this.newSecondLetter));
//           }
//           else {
//             this.selectedSeat.push(this.firstLetter + (this.newSecondLetter - i));
//           }
//         }
//       }
//     }
//   } else if (this.adultTicket > 0) {
//     this.totalTicket = this.adultTicket + this.childrenTicket;
//     if (this.selectedSeat.length < this.totalTicket) {
//       this.selectedSeat.push(item);
//       this.firstLetter = this.selectedSeat[0].charAt(0);
//       this.secondLetter = +(this.selectedSeat[0].charAt(1) + this.selectedSeat[0].charAt(2));
//       if (this.secondLetter === 10) {
//         for (let i = 1; i < this.totalTicket; i++) {
//           this.selectedSeat.push(this.firstLetter + (this.secondLetter - i));
//         }
//       }
//       else if (this.secondLetter !== 10) {
//         for (let i = 1; i < this.totalTicket; i++) {
//           if (this.secondLetter + i < 11) {
//             this.newSecondLetter = this.secondLetter + i;
//             this.selectedSeat.push(this.firstLetter + (this.newSecondLetter));
//           }
//           else {
//             this.selectedSeat.push(this.firstLetter + (this.newSecondLetter - i));
//           }
//         }
//       }

//     }
//   }
//   console.log(this.selectedSeat);
// }


// checkOut() {
//   if (this.selectedSeat.length === this.totalTicket) {
//     this.router.navigateByUrl('/checkout/' + this.title + '/' + this.date + '/' + this.hour + '/' + this.selectedSeat + '/' + this.totalPrice);
//   } else {
//     alert('Please select all seat');
//   }
// }

// clearSeat() {
//   this.selectedSeat = [];
// }
// }
// }
