import { Component, OnInit } from '@angular/core';
interface bookinglist {
  id: string,
  customer: string,
  product: string,
  vendor: string,
  rating: string,
  review: string,
  status: string
}
interface City {
  name: string,
  code: string
}

interface Days {
  option: string,
  value: string
}

@Component({
  selector: 'app-manage-review',
  templateUrl: './manage-review.component.html',
  styleUrls: ['./manage-review.component.scss']
})
export class ManageReviewComponent implements OnInit {

  cities: City[];
  selectedCity: City;

  loading: boolean = false;
  bookings: bookinglist[] = [];

  optionDays: Days[];
  selectedDays: Days;

  calandarIcon = '../../../assets/icon/calandar.svg';
  reviewIcon = '../../../assets/images/review/review.svg'
  searchBtn = '../../../assets/icon/search-button.svg'

  today = new Date();
  dd: any;
  mm: any;
  yyyy: any;
  currentDate: any;

  selectedRows:any[];

  constructor() {
    this.bookings = [
      {
        id: 'A141',
        customer: 'Christina Billotti',
        product: 'OnePlus 7 (Mirror Grey, 6GB)',
        vendor: 'Ultra Market',
        rating: '5',
        review: 'Super Quality…',
        status: 'pending',
      },
      {
        id: 'A141',
        customer: 'Christina Billotti',
        product: 'OnePlus 7 (Mirror Grey, 6GB)',
        vendor: 'Ultra Market',
        rating: '5',
        review: 'Super Quality…',
        status: 'approved',
      },
      {
        id: 'A141',
        customer: 'Christina Billotti',
        product: 'OnePlus 7 (Mirror Grey, 6GB)',
        vendor: 'Ultra Market',
        rating: '5',
        review: 'Super Quality…',
        status: 'pending',
      },
      {
        id: 'A141',
        customer: 'Christina Billotti',
        product: 'OnePlus 7 (Mirror Grey, 6GB)',
        vendor: 'Ultra Market',
        rating: '5',
        review: 'Super Quality…',
        status: 'approved',
      },
      {
        id: 'A141',
        customer: 'Christina Billotti',
        product: 'OnePlus 7 (Mirror Grey, 6GB)',
        vendor: 'Ultra Market',
        rating: '5',
        review: 'Super Quality…',
        status: 'pending',
      },
      {
        id: 'A141',
        customer: 'Christina Billotti',
        product: 'OnePlus 7 (Mirror Grey, 6GB)',
        vendor: 'Ultra Market',
        rating: '5',
        review: 'Super Quality…',
        status: 'approved',
      },
      {
        id: 'A141',
        customer: 'Christina Billotti',
        product: 'OnePlus 7 (Mirror Grey, 6GB)',
        vendor: 'Ultra Market',
        rating: '5',
        review: 'Super Quality…',
        status: 'pending',
      },
      {
        id: 'A141',
        customer: 'Christina Billotti',
        product: 'OnePlus 7 (Mirror Grey, 6GB)',
        vendor: 'Ultra Market',
        rating: '5',
        review: 'Super Quality…',
        status: 'approved',
      },
    ];


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

  }

  ngOnInit(): void {

    this.dd = this.today.getDate();
    this.mm = this.today.getMonth();
    this.yyyy = this.today.getFullYear();
    this.currentDate = new Date(this.yyyy, this.mm, this.dd);
  }

}
