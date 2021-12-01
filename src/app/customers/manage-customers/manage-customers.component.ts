import { Component, Input, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { GetCustomerListResponse } from '../../models/CustomerResponses'
import { Router } from '@angular/router';
import { ToastService } from '../../shared/services/toast.service';
import { Status } from 'src/app/models/Status';
import { CUSTOMER_STATUS } from 'src/assets/data/status';


interface City {
  name: string,
  code: string
}

interface Days {
  option: string,
  value: string
}

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.scss']
})
export class ManageCustomersComponent implements OnInit {
  loading: boolean = false;
  @Input() listLimit: number;
  customerList: GetCustomerListResponse[] = [];
  customerStatus: Status[] = CUSTOMER_STATUS;
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
  currentDate : any;

  selectedDropdown: any=[];
  value: Date;
  filterSection: boolean = true;

  constructor(
    private customersService: CustomersService,
    private router: Router,
    private toastService: ToastService
  ) { 

    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];

  this.optionDays = [
    {option: 'Past 30 Days', value: '30'},
    {option: 'Past 10 Days', value: '10'},
    {option: 'Past 20 Days', value: '20'},
    {option: 'Past 40 Days', value: '40'},
];

  }

  ngOnInit(): void {
    this.dd = this.today.getDate();
    this.mm = this.today.getMonth(); 
    this.yyyy = this.today.getFullYear();
    this.currentDate = new Date(this.yyyy, this.mm, this.dd);

    this.getCustomerListAPICall();
  }

  getCustomerListAPICall() {
    this.customersService.getCustomerList(this.listLimit).subscribe(result => {
      this.customerList = result.data;
    })
  }

  editCustomer(customer) {
    this.router.navigate(['/customers/update']);
    localStorage.setItem('editCustomer', JSON.stringify(customer));
  }

  async deleteCustomer(customerId) {
    await this.deleteCustomerAPICall(customerId);
    this.removeDeletedCustomerFromList(customerId);
    this.toastService.showSuccessToast('Customer Deleted Successfully');
  }

  deleteCustomerAPICall(id) {
    return new Promise((resolve, reject) => {
      this.customersService.deleteCustomerById(id).subscribe(result => {
        resolve(result);
      })
    })
  }

  removeDeletedCustomerFromList(customerId) {
    const index = this.customerList.findIndex(customer => customer._id === customerId)
    if (index > -1) {
      this.customerList.splice(index, 1);
    }
  }

  async statusChangeEvent(customer) {
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

}
