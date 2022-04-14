import { Component, Input, OnInit } from '@angular/core';
import { GetVendorListResponse } from '../../../models/VendorResponses';
import { ToastService } from '../../../shared/services/toast.service';
import { HairStylistsService } from '../../../hair-stylists/hair-stylists.service';
import { City, FilterDays } from 'src/app/models/Common';
import { CITY_LIST, FILTER_DAYS } from 'src/assets/data/common';
import { OrderManagementService } from '../../order-management.service';
import { Booking, BookingFilter } from 'src/app/models/Booking';
import { Status } from 'src/app/models/Status';
import { BOOKING_STATUS } from 'src/assets/data/status';

@Component({
  selector: 'app-cancellation-request',
  templateUrl: './cancellation-request.component.html',
  styleUrls: ['./cancellation-request.component.scss']
})
export class CancellationRequestComponent implements OnInit {

  loading: boolean = false;
  cities: City[] = CITY_LIST;
  optionDays: FilterDays[] = FILTER_DAYS;
  currentDate: any
  bookingList: Booking[] = [];
  bookingStatus: Status[] = BOOKING_STATUS;

  selectedDropdown: any = [];
  value: Date;
  filterSection: boolean = true;
  filterItems: BookingFilter = {} as BookingFilter;
  appliedFiltersLength = 0;

  selectedRows:any[];

  constructor(
    private orderManagementService: OrderManagementService,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this.getBookingListAPICall(this.filterItems);
  }

  getBookingListAPICall(filter) {
    this.orderManagementService.getBookingList(filter).subscribe(result => {
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
    this.orderManagementService.updateBookingById(id, body).subscribe(result => {
      this.getBookingListAPICall(this.filterItems);
    })
  }

  submitFilter() {
    this.appliedFiltersLength = Object.values(this.filterItems).length;
    this.getBookingListAPICall(this.filterItems);
  }

  onFromDateSelect() {
    if (!this.filterItems.to_date) {
      this.filterItems.to_date = this.filterItems.from_date;
    }
  }
}
