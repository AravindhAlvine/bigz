import { Component, OnInit } from '@angular/core';
interface City {
  name: string,
  code: string
}
interface bookinglist {
  id: string,
  plan: string,
  pricing: string,
  duration: string,
  nos: string,
  status: string
}
@Component({
  selector: 'app-vendor-plans',
  templateUrl: './vendor-plans.component.html',
  styleUrls: ['./vendor-plans.component.scss']
})
export class VendorPlansComponent implements OnInit {
  loading: boolean = false;


  bookings: bookinglist[] = [];
  cities: City[];
  selectedCity: City;

  searchBtn = '../../../assets/icon/search-button.svg'
  
  constructor() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
   
  this.bookings = [
    { 
      id: 'A141',
      plan: 'Gold Plan',
      pricing: '$499',
      duration: '3 Month',
      nos: '145',
      status: 'active',
    },
    { 
      id: 'A141',
      plan: 'Gold Plan',
      pricing: '$499',
      duration: '3 Month',
      nos: '145',
      status: 'deactived',
    },
    { 
      id: 'A141',
      plan: 'Gold Plan',
      pricing: '$499',
      duration: '3 Month',
      nos: '145',
      status: 'active',
    },
    { 
      id: 'A141',
      plan: 'Gold Plan',
      pricing: '$499',
      duration: '3 Month',
      nos: '145',
      status: 'deactived',
    },
    { 
      id: 'A141',
      plan: 'Gold Plan',
      pricing: '$499',
      duration: '3 Month',
      nos: '145',
      status: 'active',
    },
    { 
      id: 'A141',
      plan: 'Gold Plan',
      pricing: '$499',
      duration: '3 Month',
      nos: '145',
      status: 'active',
    },  { 
      id: 'A141',
      plan: 'Gold Plan',
      pricing: '$499',
      duration: '3 Month',
      nos: '145',
      status: 'active',
    },
    { 
      id: 'A141',
      plan: 'Gold Plan',
      pricing: '$499',
      duration: '3 Month',
      nos: '145',
      status: 'deactived',
    },
    { 
      id: 'A141',
      plan: 'Gold Plan',
      pricing: '$499',
      duration: '3 Month',
      nos: '145',
      status: 'deactived',
    },
    { 
      id: 'A141',
      plan: 'Gold Plan',
      pricing: '$499',
      duration: '3 Month',
      nos: '145',
      status: 'active',
    },
    { 
      id: 'A141',
      plan: 'Gold Plan',
      pricing: '$499',
      duration: '3 Month',
      nos: '145',
      status: 'active',
    },  { 
      id: 'A141',
      plan: 'Gold Plan',
      pricing: '$499',
      duration: '3 Month',
      nos: '145',
      status: 'active',
    },
    { 
      id: 'A141',
      plan: 'Gold Plan',
      pricing: '$499',
      duration: '3 Month',
      nos: '145',
      status: 'deactived',
    },
    
  ];

   }

  ngOnInit(): void {
  }

}
