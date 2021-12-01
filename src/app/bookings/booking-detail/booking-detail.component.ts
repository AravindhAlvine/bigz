import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
interface bookinglist {
  productdetail: string,
  vendorname: string,
  shopprice: string,
  unitprice: string,
  qty: string,
  discount: string,
  grandtotal: string
}

interface servicelist {
  nameservice: string,
  value: string
}

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss']
})
export class BookingDetailComponent implements OnInit {
  form!: NgForm;
  loading: boolean = false;
  bookings: bookinglist[] = [];

  servicename: servicelist[] = [];
  selectservice: servicelist

  iconImage1 = '../../../assets/images/booking/icon_1.svg';
  iconImage2 = '../../../assets/images/booking/icon_2.svg';
  iconImage3 = '../../../assets/images/booking/icon_3.svg';
  iconImage4 = '../../../assets/images/booking/icon_4.svg';

  constructor() {
    this.servicename = [
      {nameservice: 'FedEx', value: 'NY'},
      {nameservice: 'Green Saloon', value: 'RM'},
      {nameservice: 'Red Saloon', value: 'LDN'}
    ];
   }

  ngOnInit(): void {
    this.bookings = [
      { 
        productdetail: 'Ico Blue Star Slim Women’s Light Blue',
        vendorname: 'Kanwar’s Shop',
        shopprice: '$50.00',
        unitprice: '$87.00',
        qty: '1',
        discount: '$0.00',
        grandtotal: '$137.00'
      }
    ];
  }

}
