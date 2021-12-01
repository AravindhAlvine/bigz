import { Component, OnInit } from '@angular/core';
interface City {
  name: string,
  code: string
}
interface bookinglist {
  id: string,
  owner: string,
  vendor: string,
  products: string,
  reviews: string,
  featured: string,
  lastaccess: string,
  status: string
  
}
@Component({
  selector: 'app-vendor-request',
  templateUrl: './vendor-request.component.html',
  styleUrls: ['./vendor-request.component.scss']
})
export class VendorRequestComponent implements OnInit {
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
      owner: 'Christina Billotti',
      vendor: 'Ultra Store',
      products: '12',
      reviews: '1',
      featured : '',
      lastaccess : 'Jun 23, 2021 16:12',
      status: 'pending',
    },
    { 
      id: 'A141',
      owner: 'Christina Billotti',
      vendor: 'Ultra Store',
      products: '12',
      reviews: '1',
      featured : '',
      lastaccess : 'Jun 23, 2021 16:12',
      status: 'pending',
    },
    { 
      id: 'A141',
      owner: 'Christina Billotti',
      vendor: 'Ultra Store',
      products: '12',
      reviews: '1',
      featured : '',
      lastaccess : 'Jun 23, 2021 16:12',
      status: 'pending',
    },
    { 
      id: 'A141',
      owner: 'Christina Billotti',
      vendor: 'Ultra Store',
      products: '12',
      reviews: '1',
      featured : '',
      lastaccess : 'Jun 23, 2021 16:12',
      status: 'pending',
    },
    { 
      id: 'A141',
      owner: 'Christina Billotti',
      vendor: 'Ultra Store',
      products: '12',
      reviews: '1',
      featured : '',
      lastaccess : 'Jun 23, 2021 16:12',
      status: 'pending',
    },
    { 
      id: 'A141',
      owner: 'Christina Billotti',
      vendor: 'Ultra Store',
      products: '12',
      reviews: '1',
      featured : '',
      lastaccess : 'Jun 23, 2021 16:12',
      status: 'pending',
    },  { 
      id: 'A141',
      owner: 'Christina Billotti',
      vendor: 'Ultra Store',
      products: '12',
      reviews: '1',
      featured : '',
      lastaccess : 'Jun 23, 2021 16:12',
      status: 'pending',
    },  { 
      id: 'A141',
      owner: 'Christina Billotti',
      vendor: 'Ultra Store',
      products: '12',
      reviews: '1',
      featured : '',
      lastaccess : 'Jun 23, 2021 16:12',
      status: 'pending',
    },  { 
      id: 'A141',
      owner: 'Christina Billotti',
      vendor: 'Ultra Store',
      products: '12',
      reviews: '1',
      featured : '',
      lastaccess : 'Jun 23, 2021 16:12',
      status: 'pending',
    },  { 
      id: 'A141',
      owner: 'Christina Billotti',
      vendor: 'Ultra Store',
      products: '12',
      reviews: '1',
      featured : '',
      lastaccess : 'Jun 23, 2021 16:12',
      status: 'pending',
    },  { 
      id: 'A141',
      owner: 'Christina Billotti',
      vendor: 'Ultra Store',
      products: '12',
      reviews: '1',
      featured : '',
      lastaccess : 'Jun 23, 2021 16:12',
      status: 'pending',
    },
    
    
  ];  

  }

  ngOnInit(): void {
  }

}
