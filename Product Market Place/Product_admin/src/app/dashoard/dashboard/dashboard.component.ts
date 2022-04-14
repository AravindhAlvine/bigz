import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { GetVendorListResponse } from '../../models/VendorResponses';
import { HairStylistsService } from '../../hair-stylists/hair-stylists.service';
import { DashboardTotalCounts } from 'src/app/models/Dashboard';
import { CustomersService } from 'src/app/customers/customers.service';
import { GetCustomerListResponse } from 'src/app/models/CustomerResponses';
import { BookingsService } from 'src/app/bookings/bookings.service';
import { Booking, BookingFilter } from 'src/app/models/Booking';
import { Status } from 'src/app/models/Status';
import { BOOKING_STATUS, CUSTOMER_STATUS, VENDOR_STATUS } from 'src/assets/data/status';

import { MouseMoveService } from '../../services/table-draggable/mouseMove.service';
import { CustomerFilter } from 'src/app/models/Customer';
import { ToastService } from '../../shared/services/toast.service';

import { Router } from '@angular/router';


interface City {
  name: string,
  code: string
}

interface Days {
  option: string,
  value: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  bookingList: Booking[] = [];
  customerList: GetCustomerListResponse[];
  totalCounts: DashboardTotalCounts
  datshboardTable: any;
  loading: boolean = false;
  listLimit: number;
  currentRate = 3;
  vendorList: GetVendorListResponse[] = [];
  iconImage1 = '../../../assets/images/dashboard/icon_1.svg';
  iconImage2 = '../../../assets/images/dashboard/icon_2.svg';
  iconImage3 = '../../../assets/images/dashboard/icon_3.svg';
  iconImage4 = '../../../assets/images/dashboard/icon_4.svg';

  cities: City[];
  selectedCity: City;

  optionDays: Days[];
  selectedDays: Days;

  calandarIcon = '../../../assets/icon/calandar.svg';
  reviewIcon = '../../../assets/images/review/review.svg';
  searchBtn = '../../../assets/icon/search-button.svg';

  today = new Date();
  dd: any;
  mm: any;
  yyyy: any;
  currentDate: any
  bookingStatus: Status[] = BOOKING_STATUS;
  vendorStatus: Status[] = VENDOR_STATUS;
  customerStatus: Status[] = CUSTOMER_STATUS;

  value: Date;
  selectedDropdown: any[];
  filterSection: boolean = true;
  triangleClass: number = 1;

  selectedRows:any[];


  constructor(
    private hairStylistsService: HairStylistsService,
    private dashboardService: DashboardService,
    private customersService: CustomersService,
    private bookingsService: BookingsService,
    private MouseMove: MouseMoveService,
    private toastService: ToastService,
    private router: Router,

  ) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

    this.optionDays = [
      { option: 'Today', value: '30' },
      { option: 'Yesterday', value: '10' },
      { option: 'This Week', value: '20' },
      { option: 'This Month', value: '40' },
      { option: 'Last Month', value: '40' },
      { option: 'All Time', value: '40' },
      { option: 'Custom', value: '40' },
    ];

    this.selectedDropdown = [
      { name: 'Approved', value: 'AP' },
      { name: 'Declined', value: 'DC' },
      { name: 'Pending', value: 'PE' },
      { name: 'Deleted', value: 'DL' },
    ]

  }

  cols: any[];
  cars: any[];



  ngOnInit(): void {
    // this.dashboardService.getDatshboardData().subscribe((res: any) => {
    //   this.datshboardTable =  res.datshboardTable;
    // });

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
  ];

  this.cars = [
    { field: 'vin', header: 'Vin' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' }
];

    this.dd = this.today.getDate();
    this.mm = this.today.getMonth();
    this.yyyy = this.today.getFullYear();
    this.currentDate = new Date(this.yyyy, this.mm, this.dd);
    this.getdashboardTotalCountsAPICall();
    this.getVendorListAPICall();
    this.getCustomerListAPICall();
    this.getBookingListAPICall();
  }

  getdashboardTotalCountsAPICall() {
    this.dashboardService.getDashboardTotalCounts().subscribe(result => {
      this.totalCounts = result.data;
      console.log('this.totalCounts', this.totalCounts)
    })
  }

  getVendorListAPICall() {
    this.hairStylistsService.getVendorList({}).subscribe(result => {
      this.vendorList = result.data;
      console.log('this.vendorList', this.vendorList)
    })
  }

  getCustomerListAPICall() {
    this.customersService.getCustomerList({} as CustomerFilter).subscribe(result => {
      this.customerList = result.data;
      console.log('this.customerList', this.customerList);
    })
  }

  getBookingListAPICall() {
    this.bookingsService.getBookingList({} as BookingFilter).subscribe(result => {
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

  async vendorStatusChangeEvent(vendor) {
    const vendorStatus = {
      status: vendor.status
    }
    await this.updateVendorAPICall(vendor._id, vendorStatus);
  }

  updateVendorAPICall(id, body) {
    return new Promise((resolve, reject) => {
      this.hairStylistsService.updateVendorById(id, body).subscribe(result => {
        resolve(result.data);
      })
    })
  }

  async customerStatusChangeEvent(customer) {
    const customerStatus = {
      status: customer.status
    }
    await this.updateCustomerAPICall(customer._id, customerStatus);
  }

  updateCustomerAPICall(id, body) {
    return new Promise((resolve, reject) => {
      this.customersService.updateCustomerById(id, body).subscribe(result => {
        resolve(result.data);
      })
    })
  }

  bookingStatusChangeEvent(booking) {
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

  deleteVendor(id:any){
    this.bookingsService.deleteVendorById(id).subscribe(result => {
      this.getVendorListAPICall();
      this.toastService.showSuccessToast('Selected Vendor Deleted Successfully');
    })
  }

  deleteCustomers(id:any){
    this.customersService.deleteCustomerById(id).subscribe(result => {
    this.getCustomerListAPICall();
    this.toastService.showSuccessToast('Selected Customer Deleted Successfully');
    })
  }

  // mouse move horizontal draggable
  cursordragableTable() {
    this.MouseMove.mouseMoveTable();
    // console.log('red');
  }

  selectedCard(id: any){
    this.triangleClass = id;
  }


  // recentVendors(id: any){
  //   this.router.navigateByUrl("vendors/update")
  // }




}
