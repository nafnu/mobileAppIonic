import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventdetailComponent } from './components/eventdetail/eventdetail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'eventdetail/:id', component: EventdetailComponent}


  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'events-info',
    loadChildren: () => import('./pages/events-info/events-info.module').then( m => m.EventsInfoPageModule)
  },
  {
    path: 'select-tickets',
    loadChildren: () => import('./pages/select-tickets/select-tickets.module').then( m => m.SelectTicketsPageModule)
  }

    

];

