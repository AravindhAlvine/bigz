import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  Province: any = [];
  list: any = [];
  payment_radio: any;
  paymentList: any;
  clickSubject: Subject<any> = new Subject();
  // @Output() bookingId = new EventEmitter;
  bookingId: number = 3;
  selectedValues: string[] = [];
  products: any[] = [
    { name: 'LeBron Witness 5 Nike Shoes', size: 'Size : XL', color: 'Blue Color', amount: '$35.00', img: '../../../assets/product/Product image.svg' },
    { name: 'LeBron Witness 5 Nike Shoes', size: 'Size : L', color: 'Green Color', amount: '$20.00', img: '../../../assets/product/Product image.svg' },
  ];

  shippingDetails: any = [
    { title: 'Contact', name: 'mnaafiuibrahim@gmail.com', },
    { title: 'Ship to', name: 'Gang SD, RT.1, RW.2, Srengseng sawah, KOTA JAKARTA SELATAN DKI JAKARTA ID 12640, Jakarta Selatan, Jakarta, Indonesia', },
    { title: 'Method', name: 'Standard (7-14 Working Days) - $9.00 ', }
  ];

  constructor(private router: Router) {
    this.Province = [
      { label: 'card 1' },
      { label: 'card 2' },
      { label: 'Province' },
    ]

    this.list = [
      { label: "Australia", value: "AU" },
      { label: "Brazil", value: "BR" },
      { label: "China", value: "CN" },
      { label: "Egypt", value: "EG" },
      { label: "France", value: "FR" },
      { label: "Germany", value: "DE" },
      { label: "India", value: "IN" },
      { label: "Japan", value: "JP" },
      { label: "Spain", value: "ES" },
      { label: "United States", value: "US" }
    ];

  }

  ngOnInit(): void {
  }

  booking(id: any) {
    this.bookingId = id;
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }


}
