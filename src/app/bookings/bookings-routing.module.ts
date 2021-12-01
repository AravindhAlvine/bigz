import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Bookings'
    },
    children: [
      {
        path: '',
        redirectTo: 'bookinglist'
      },
      {
        path: 'bookinglist',
        component: ManageBookingComponent,
        data: {
          title: 'Manage Bookings'
        }
      },

      {
        path: 'booking-detail',
        component: BookingDetailComponent,
        data: {
          title: 'Bookings Detail'
        }
      }
       
      

      
      
       
       
       
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
