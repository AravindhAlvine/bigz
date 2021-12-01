import { Component, Input, OnInit } from '@angular/core';
import { GetVendorListResponse } from '../../models/VendorResponses';
import { ToastService } from '../../shared/services/toast.service';
import { HairStylistsService } from '../hair-stylists.service';
import { Status } from 'src/app/models/Status';
import { VENDOR_STATUS } from 'src/assets/data/status';

interface City {
  name: string,
  code: string
}

interface Days {
  option: string,
  value: string
}

@Component({
  selector: 'app-manage-hair-stylists',
  templateUrl: './manage-hair-stylists.component.html',
  styleUrls: ['./manage-hair-stylists.component.scss']
})
export class ManageHairStylistsComponent implements OnInit {
  loading: boolean = false;
  @Input() listLimit: number;
  currentRate = 3;
  vendorList: GetVendorListResponse[] = [];

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
  currentDate: any
  vendorStatus: Status[] = VENDOR_STATUS;

  selectedDropdown: any;
  // City: any ;

  value: Date;
  filterSection: boolean = true;

  constructor(
    private hairStylistsService: HairStylistsService,
    private toastService: ToastService,
  ) {

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

    this.selectedDropdown = [
      { name: 'Approved', code: 'AP' },
      { name: 'Declined', code: 'DC' },
      { name: 'Pending', code: 'PE' },
      { name: 'Deleted', code: 'DL' },
    ];

  }

  ngOnInit(): void {
    this.getVendorListAPICall();
  }

  getVendorListAPICall() {
    this.hairStylistsService.getVendorList(this.listLimit).subscribe(result => {
      this.vendorList = result.data;
    })
  }

  async deleteVendor(vendorId) {
    await this.deleteVendorAPICall(vendorId);
    this.removeDeletedVendorFromList(vendorId);
    this.toastService.showSuccessToast('Hairstylist Deleted Successfully');
  }

  deleteVendorAPICall(id) {
    return new Promise((resolve, reject) => {
      this.hairStylistsService.deleteVendorById(id).subscribe(result => {
        resolve(result);
      })
    })
  }

  removeDeletedVendorFromList(vendorId) {
    const index = this.vendorList.findIndex(vendor => vendor._id === vendorId)
    if (index > -1) {
      this.vendorList.splice(index, 1);
    }
  }

  async approveVendor(id, index) {
    const result = await this.approveVendorAPICall(id);
    this.vendorList[index].status = result['status'];
  }

  approveVendorAPICall(id) {
    return new Promise((resolve, reject) => {
      this.hairStylistsService.approveVendorById(id).subscribe(result => {
        this.toastService.showSuccessToast(result.message);
        resolve(result.data);
      })
    })
  }

  async statusChangeEvent(vendor) {
    const vendorStatus = {
      status: vendor.status
    }
    await this.updateVendorAPICall(vendor._id, vendorStatus);
  }

  updateVendorAPICall(id, body) {
    return new Promise((resolve, reject) => {
      this.hairStylistsService.updateVendorById(id, body).subscribe(result => {
        resolve(result.data);
      })
    })
  }
}
