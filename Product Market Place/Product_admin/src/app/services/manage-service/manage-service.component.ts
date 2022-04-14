import { Component, OnInit } from '@angular/core';
import { Service, ServiceFilter } from 'src/app/models/Service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/shared/services/toast.service';
import { ServicesService } from '../services.service';
import { SERVICE_STATUS } from 'src/assets/data/status';

interface City {
  name: string,
  code: string
}

interface Days {
  option: string,
  value: string
}

@Component({
  selector: 'app-manage-service',
  templateUrl: './manage-service.component.html',
  styleUrls: ['./manage-service.component.scss']
})
export class ManageServiceComponent implements OnInit {
  loading: boolean = false;
  serviceList: Service[] = [];

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
  currentDate: any;

  selectedDropdown: any = [];
  value: Date;
  filterSection: boolean = true;
  filterItems: ServiceFilter = {} as ServiceFilter;
  appliedFiltersLength = 0;
  serviceStatus = SERVICE_STATUS;
  constructor(
    private servicesService: ServicesService,
    private router: Router,
    private toastService: ToastService) {

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

    this.optionDays = [
      { option: 'Past 30 Days', value: '30' },
      { option: 'Past 10 Days', value: '10' },
      { option: 'Past 20 Days', value: '20' },
      { option: 'Past 40 Days', value: '40' },
    ];

  }

  ngOnInit(): void {

    this.dd = this.today.getDate();
    this.mm = this.today.getMonth();
    this.yyyy = this.today.getFullYear();
    this.currentDate = new Date(this.yyyy, this.mm, this.dd);
    this.getServiceListAPICall(this.filterItems);
  }

  getServiceListAPICall(filter) {
    this.servicesService.getServiceList(filter).subscribe(result => {
      this.serviceList = result.data;
      console.log('this.serviceList', this.serviceList);
    })
  }

  editService(service) {
    this.router.navigate(['/services/update']);
    localStorage.setItem('editService', JSON.stringify(service));
  }

  async deleteService(serviceId) {
    await this.deleteServiceAPICall(serviceId);
    this.removeDeletedServiceFromList(serviceId);
    this.toastService.showSuccessToast('Service Deleted Successfully');
  }

  deleteServiceAPICall(id) {
    return new Promise((resolve, reject) => {
      this.servicesService.deleteServiceById(id).subscribe(result => {
        resolve(result);
      })
    })
  }

  removeDeletedServiceFromList(serviceId) {
    const index = this.serviceList.findIndex(service => service._id === serviceId)
    if (index > -1) {
      this.serviceList.splice(index, 1);
    }
  }

  submitFilter() {
    this.appliedFiltersLength = Object.values(this.filterItems).length;
    this.getServiceListAPICall(this.filterItems);
  }


  async statusChangeEvent(service) {
    const serviceStatus = {
      status: service.status
    }
    this.updateServiceAPICall(service._id, serviceStatus);
  }

  updateServiceAPICall(id, request) {
    this.servicesService.updateServiceById(id, request).subscribe(async (result) => {
    })
  }

  onFromDateSelect() {
    if(!this.filterItems.to_date) {
      this.filterItems.to_date = this.filterItems.from_date;
    }
  }

}
