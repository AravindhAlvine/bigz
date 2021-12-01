import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { HairStylistsService } from 'src/app/hair-stylists/hair-stylists.service';
import { CmsBlockRequest, CmsBlockResponse } from 'src/app/models/CMS';
import { GetVendorsStoreNameListReponse } from 'src/app/models/VendorResponses';
import { ToastService } from 'src/app/shared/services/toast.service';
import { CmsService } from '../cms.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VendorEditComponent implements OnInit {
  isEditMode: boolean = false;
  vendorStoreName: GetVendorsStoreNameListReponse[];
  blockDetails: CmsBlockResponse = {
    title: '',
    items: []
  } as CmsBlockResponse;;
  pageId: string;
  constructor(
    private hairStylistsService: HairStylistsService,
    private cmsService: CmsService,
    private toastService: ToastService,
    private router: Router,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.getPageId();
    this.isEditVendorMode();
    this.getVendorStoreNameListAPICall();
  }

  addNewItemToVendors() {
    this.blockDetails.items.push(this.getNewVendorItem())
  }

  getPageId() {
    this.pageId = localStorage.getItem('pageId');    
  }

  getNewVendorItem() {
    const newItem = {
      _id: null,
      name: null,
      logo: {
        file_name: null,
        url: null
      },
      slug: null,
      is_disabled: false
    }
    return newItem;
  }

  getVendorStoreNameListAPICall() {
    this.hairStylistsService.getVendorsStoreNameList().subscribe(result => {
      this.vendorStoreName = result.data;
    })
  }

  onVendorChangeEvent(event, index) {
    const choosenVendor = this.getSelectedVendorById(event.value);
    this.blockDetails.items[index].slug = choosenVendor.slug;
    this.blockDetails.items[index].logo = choosenVendor.logo;
  }

  getSelectedVendorById(id) {
    const data = this.vendorStoreName.filter(vendor => {
      return vendor._id == id;
    })
    return data[0];
  }

  saveVendors() {
    this.savePageDetailsAPICall()
  }

  savePageDetailsAPICall() {
    const requestBody = this.getSaveBlockDetailsRequestBody();
    this.cmsService.savePageDetails(this.pageId, requestBody).subscribe(result => {
      this.toastService.showSuccessToast('Vendor block saved successfully');
      this.router.navigate(['/cms/home']);

    })
  }

  getSaveBlockDetailsRequestBody() {
    const body: CmsBlockRequest = {
      title: this.blockDetails.title,
      items: this.blockDetails.items.map(item => {
        return item._id
      }),
      block_type: 'vendor'
    }
    if (this.blockDetails) {
      body._id = this.blockDetails._id;
    }
    return body;
  }

  isEditVendorMode() {
    this.blockDetails = JSON.parse(localStorage.getItem('block'))  || {title: '', items: []};
    if (Object.keys(this.blockDetails).length > 0 && this.blockDetails.items.length > 0) {
      this.isEditMode = true;
      this.blockDetails.items.map(item => {
        item.is_disabled = true;
      })
    } else {
      this.addNewItemToVendors();
    }
  }

  deleteBlockItem(event, item, index) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to delete this item?',
      icon: 'fa fa-exclamation-triangle',
      accept: () => {        
        this.deleteBlockItemAPICall(item, index);
      },
      reject: () => { }
    });
  }

  deleteBlockItemAPICall(item, index) {        
    if (item.is_disabled) { 
      this.cmsService.deletePageBlockItemById(this.pageId, this.blockDetails._id, item._id).subscribe(result => {
        this.toastService.showSuccessToast(result.message)
        this.blockDetails.items.splice(index, 1);
      })
    } else {
      this.blockDetails.items.splice(index, 1);
    }
  }

  ngOnDestroy() {
    localStorage.removeItem('block');
    localStorage.removeItem('pageId');
  }
}
