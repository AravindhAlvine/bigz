import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HairStylistsService } from 'src/app/hair-stylists/hair-stylists.service';
import { Service } from 'src/app/models/Service';
import { CreateServiceRequest } from 'src/app/models/ServiceRequests';
import { ToastService } from 'src/app/shared/services/toast.service';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {
  form!: NgForm;
  serviceData: Service = {} as Service;
  isEditMode: boolean = false;
  serviceImageToUpload: File;
  uploadImageFormData = new FormData();
  currentServiceId: string;
  isServiceImageDeleted: boolean = false;
  deletedServiceImageUrl: string;
  serviceForm: NgForm;
  constructor(
    private servicesService: ServicesService,
    private toastService: ToastService,
    private router: Router,
    private hairStylistsService: HairStylistsService
  ) {
  }
  ngOnInit(): void {
    const editServiceData = JSON.parse(localStorage.getItem('editService'));
    if (editServiceData) {
      this.isEditMode = true;
      this.currentServiceId = editServiceData._id;
      this.serviceData = editServiceData;
    }
  }

  createServiceAPICall() {
    this.servicesService.createService(this.serviceData).subscribe(result => {
      this.currentServiceId = result.data._id;
      if (this.serviceImageToUpload) {
        this.uploadServiceImageAPICall();
      }
      else {
        this.toastService.showSuccessToast(result.message);
        this.serviceForm.resetForm();
      }
    })
  }

  createService(form) {
    this.serviceForm = form;
    if (form.valid)
      this.createServiceAPICall();
  }

  ngOnDestroy() {
    localStorage.removeItem('editService');
  }

  async editService(form) {
    this.serviceForm = form;
    if (form.valid) {
      const request: CreateServiceRequest = this.getEditServiceRequest();
      if (this.isServiceImageDeleted) {
        request.service_image = null;
        await this.deleteUploadedImageAPICall(this.deletedServiceImageUrl);
      }
      this.editServiceAPICall(this.serviceData['_id'], request);
    }
  }

  getEditServiceRequest() {
    const request: CreateServiceRequest = {
      name: this.serviceData.name,
      description: this.serviceData.description,
    }
    return request;
  }
  editServiceAPICall(id, request) {
    this.servicesService.updateServiceById(id, request).subscribe(async (result) => {
      if (this.serviceImageToUpload) {
        await this.uploadServiceImageAPICall();
      }
      this.router.navigateByUrl('services/manage');
    })
  }

  serviceImageChangeEvent(file: any) {
    this.serviceImageToUpload = <File>file.currentFiles[0];
    this.uploadImageFormData.append('service_image', this.serviceImageToUpload);
  }

  uploadServiceImageAPICall() {
    return new Promise((resolve, reject) => {
      this.servicesService.uploadServiceImage(this.uploadImageFormData, this.currentServiceId).subscribe(result => {
        if (this.isEditMode)
          this.toastService.showSuccessToast('Service details updated Successfully');
        else
          this.toastService.showSuccessToast('Service Created Successfully');
        this.serviceForm.resetForm();
        resolve(result);
      })
    })
  }

  async deleteServiceImage(serviceImage) {
    this.deletedServiceImageUrl = serviceImage.url;
    this.isServiceImageDeleted = true;
    this.serviceData.service_image = null;
  }

  deleteUploadedImageAPICall(url) {
    return new Promise((resolve, reject) => {
      this.hairStylistsService.deleteUploadedImage(url).subscribe(result => {
        resolve(result);
      })
    })
  }
}
