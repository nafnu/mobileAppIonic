import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventdetailComponent } from './components/eventdetail/eventdetail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'eventdetail/:id', component: EventdetailComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
