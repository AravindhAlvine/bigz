import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HairStylistsService } from 'src/app/hair-stylists/hair-stylists.service';
import { AssignServiceRequest } from 'src/app/models/ServiceRequests';
import { GetServicesNameListReponse } from 'src/app/models/ServiceResponses';
import { GetVendorsStoreNameListReponse } from 'src/app/models/VendorResponses';
import { ToastService } from 'src/app/shared/services/toast.service';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-assign-service',
  templateUrl: './assign-service.component.html',
  styleUrls: ['./assign-service.component.scss']
})
export class AssignServiceComponent implements OnInit {

  form!: NgForm;
  servicesName: GetServicesNameListReponse[];
  hairstylistsStoreName: GetVendorsStoreNameListReponse[];
  selectedHairstylist: GetVendorsStoreNameListReponse;
  selectedService: GetServicesNameListReponse;
  assignServiceData: AssignServiceRequest[] = [];
  
  constructor(
    private servicesService: ServicesService,
    private hairStylistsService: HairStylistsService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.getServicesNameListAPICall();
    this.getHairstylistsStoreNameListAPICall();
    this.addNewItemToAssignServiceDetails();
  }

  getServicesNameListAPICall() {
    this.servicesService.getServicesNameList().subscribe(result => {
      this.servicesName = result.data;
    })
  }

  getHairstylistsStoreNameListAPICall() {
    this.hairStylistsService.getVendorsStoreNameList().subscribe(result => {
      this.hairstylistsStoreName = result.data;
    })
  }

  async assignService(form) {
    if (form.valid) {
      await this.createAssignServiceRequestBody();
      await this.assignServiceAPICall();
      this.toastService.showSuccessToast('Service assigned successfuly');
      form.resetForm();
    }
  }

  createAssignServiceRequestBody() {
    return new Promise((resolve, reject) => {
      this.assignServiceData.map(item => {
        item.vendor = this.selectedHairstylist._id;
        item.service = item.service['_id'];
      })
      resolve(this.assignServiceData);
    })
  }

  assignServiceAPICall() {
    return new Promise((resolve, reject) => {
      this.servicesService.assignService(this.assignServiceData).subscribe(result => {
        resolve(result);
      })
    })
  }

  getNewAssignServiceItem() {
    const newItem: AssignServiceRequest = {
      duration: null,
      price: null,
      vendor: null,
      service: null
    }
    return newItem;
  }

  addNewItemToAssignServiceDetails() {
    this.assignServiceData.push(this.getNewAssignServiceItem())
  }

  removeAssignServiceItem(index) {
    this.assignServiceData.splice(index, 1);
  }

}
