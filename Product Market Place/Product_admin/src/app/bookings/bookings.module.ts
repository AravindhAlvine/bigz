import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsRoutingModule } from './bookings-routing.module';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { SharedModule } from '../shared/shared.module';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';


@NgModule({
  declarations: [
    ManageBookingComponent,
    BookingDetailComponent
  ],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    SharedModule
  ]
})
export class BookingsModule { }
