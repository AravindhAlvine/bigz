import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
interface servicelist {
  nameservice: string,
  value: string
}
@Component({
  selector: 'app-create-plans',
  templateUrl: './create-plans.component.html',
  styleUrls: ['./create-plans.component.scss']
})
export class CreatePlansComponent implements OnInit {
  form!: NgForm;

  servicename: servicelist[] = [];
  selectservice: servicelist


  constructor() { 
    this.servicename = [
      {nameservice: 'Blue Saloon', value: 'NY'},
      {nameservice: 'Green Saloon', value: 'RM'},
      {nameservice: 'Red Saloon', value: 'LDN'}
    ];
  }

  ngOnInit(): void {
  }

}
