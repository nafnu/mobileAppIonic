import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventdetailComponent } from './components/eventdetail/eventdetail.component';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SeatsComponent} from './components/seats/seats.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'eventdetail/:id', component: EventdetailComponent},
  {path: 'booking/:title/:date/:hour', component: BookingComponent},
  {path: 'seats/:title/:date/:hour', component: SeatsComponent},
  {path: 'checkout/:title/:date/:hour/:selectedSeat/:totalPrice', component: CheckoutComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }