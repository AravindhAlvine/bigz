import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
interface hairstylelist {
  name: string,
  value: string
}

interface servicelist {
  nameservice: string,
  value: string
}

interface Producttype {
  name: string,
  code: string
}

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form!: NgForm;

  cattype: Producttype[];

  cattypes: Producttype[];

  servicename: servicelist[] = [];
  selectservice: servicelist

  hairstyle: hairstylelist[] = [];
  selectlist: hairstylelist;
  
  constructor() { 


    this.cattype = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];

    this.hairstyle = [
      {name: 'Date', value: 'NY'},
      {name: 'Type', value: 'RM'},
      {name: 'Price', value: 'LDN'}
    ];

    this.servicename = [
      {nameservice: 'DESC', value: 'NY'},
      {nameservice: 'ASC', value: 'RM'},
    ];
  }

  ngOnInit(): void {
  }

}
