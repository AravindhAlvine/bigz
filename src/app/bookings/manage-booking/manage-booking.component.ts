import { Component, Input, OnInit } from '@angular/core';
import { GetVendorListResponse } from '../../models/VendorResponses';
import { ToastService } from '../../shared/services/toast.service';
import { HairStylistsService } from '../../hair-stylists/hair-stylists.service';
import { City, FilterDays } from 'src/app/models/Common';
import { CITY_LIST, FILTER_DAYS } from 'src/assets/data/common';
import { BookingsService } from '../bookings.service';
import { Booking } from 'src/app/models/Booking';
import { Status } from 'src/app/models/Status';
import { BOOKING_STATUS } from 'src/assets/data/status';


@Component({
  selector: 'app-manage-booking',
  templateUrl: './manage-booking.component.html',
  styleUrls: ['./manage-booking.component.scss']
})
export class ManageBookingComponent implements OnInit {
  loading: boolean = false;
  cities: City[] = CITY_LIST;
  optionDays: FilterDays[] = FILTER_DAYS;
  currentDate: any
  bookingList: Booking[] = [];
  bookingStatus: Status[] = BOOKING_STATUS;

  selectedDropdown: any=[];
  value: Date;
  filterSection: boolean = true;

  constructor(
    private bookingsService: BookingsService,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this.getBookingListAPICall();
  }

  getBookingListAPICall() {
    this.bookingsService.getBookingList().subscribe(result => {
      this.bookingList = result.data;
    })
  }

  getServiceListString(services) {
    let string;
    services.forEach(element => {
      if (string)
        string = string + ', ' + element.name
      else
        string = element.name;
    });
    return string;
  }

  statusChangeEvent(booking) {
    const bookingStatus = {
      status: booking.status
    }
    this.updateBookingAPICall(booking._id, bookingStatus);
  }

  updateBookingAPICall(id, body) {
    this.bookingsService.updateBookingById(id, body).subscribe(result => {
      this.getBookingListAPICall();
    })
  }
}
