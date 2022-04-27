import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { CartComponent } from '../booking/cart/cart.component';

import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';

import { SharedModule } from '../shared/shared.module';
import { BookingDetailsComponent } from './booking-details/booking-details.component';


@NgModule({
  declarations: [
    CartComponent,
    BookingDetailsComponent,
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    StepsModule,
    ToastModule,
    SharedModule
  ]
})
export class BookingModule { }
