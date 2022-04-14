import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CmsService } from '../cms.service';
interface hairstylelist {
  name: string,
  value: string
}

interface servicelist {
  nameservice: string,
  value: string
}
@Component({
  selector: 'app-banner-edit',
  templateUrl: './banner-edit.component.html',
  styleUrls: ['./banner-edit.component.scss']
})
export class BannerEditComponent implements OnInit {
  form!: NgForm;
  isEditMode: boolean = false;
  servicename: servicelist[] = [];
  selectservice: servicelist

  hairstyle: hairstylelist[] = [];
  selectlist: hairstylelist;
  pageId: string;
  bannerDetails: any = {};
  uploadAssestsformData = new FormData();
  bannerToUpload: File;

  constructor(
    private cmsService: CmsService,
    private router: Router,
  ) {
    this.hairstyle = [
      { name: 'Blue Saloon', value: 'NY' },
      { name: 'Green Saloon', value: 'RM' },
      { name: 'Red Saloon', value: 'LDN' }
    ];

    this.servicename = [
      { nameservice: 'Blue Saloon', value: 'NY' },
      { nameservice: 'Green Saloon', value: 'RM' },
      { nameservice: 'Red Saloon', value: 'LDN' }
    ];
  }

  ngOnInit(): void {
    this.isBannerInEditMode();
  }

  isBannerInEditMode() {
    const editBannerData = JSON.parse(localStorage.getItem('editBanner'));
    this.pageId = localStorage.getItem('pageId');
    if (editBannerData) {
      this.isEditMode = true;
      this.bannerDetails = editBannerData;
    }
  }

  async saveBannerDetails() {
    this.uploadBanner();
    const details = await this.uploadBannerAPICall(this.uploadAssestsformData);
    this.bannerDetails.image = details;
    const requestBody = { "banners": this.bannerDetails }
    this.cmsService.savePageDetails(this.pageId, requestBody).subscribe(result => {
      localStorage.setItem('editBanner', JSON.stringify(this.bannerDetails));
      this.router.navigate(['/cms/home']);
    })
  }

  bannerChangeEvent(event) {
    this.bannerToUpload = <File>event.currentFiles[0];
  }

  uploadBanner() {
    this.uploadAssestsformData = new FormData();
    this.uploadAssestsformData.append('banners', this.bannerToUpload);
  }

  uploadBannerAPICall(body) {
    return new Promise((resolve, reject) => {
      this.cmsService.getUploadBannerDetails(body).subscribe(result => {
        resolve(result.data)
      })
    })
  }

  ngOnDestroy() {
    localStorage.removeItem('editBanner');
    localStorage.removeItem('pageId');
  }
}
