import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmsService } from '../cms.service';
import { ConfirmationService } from 'primeng/api';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  // main_banner = '../../../assets/images/cms/main_banner.png';
  bannerImage1 = '../../../assets/images/cms/banner_1.png';
  bannerImage2 = '../../../assets/images/cms/banner_2.png';
  bannerImage3 = '../../../assets/images/cms/banner_3.png';
  bannerImage4 = '../../../assets/images/cms/banner_4.png';

  footerLogo = '../../../assets/images/besthairlogo-black.png';

  appstoreLogo = '../../../assets/images/footer/appstore.svg';
  playstoreLogo = '../../../assets/images/footer/appstore.svg';
  reviewIcon = '../../../assets/images/review/review.svg'

  pageId: string;
  pageDetails: any = {};
  constructor(
    private cmsService: CmsService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this.getHomePageDetailsAPICall();
  }

  getHomePageDetailsAPICall() {
    this.cmsService.getHomePageDetails().subscribe(result => {
      this.pageDetails = result.data;
    })
  }

  saveHomePageDetails() {
    this.cmsService.savePageDetails(this.pageId, this.pageDetails).subscribe(result => {
      this.pageId = result.data._id;
    })
  }

  pageDetailsIsNotEmpty() {
    return Object.keys(this.pageDetails).length !== 0
  }

  editBannerClick(banner, pageId) {
    localStorage.setItem('editBanner', JSON.stringify(banner));
    localStorage.setItem('pageId', pageId);
    this.router.navigate(['/cms/banner-edit']);
  }

  deleteBannerClick(event, banner, pageId) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to delete this banner?',
      icon: 'fa fa-exclamation-triangle',
      accept: () => {
        this.deleteBannerAPICall(banner, pageId);
      },
      reject: () => { }
    });
  }

  deleteBannerAPICall(banner, pageId) {
    const body = {
      image_url: banner.image.url
    }
    this.cmsService.deleteBannerById(pageId, banner._id, body).subscribe(result => {
      this.toastService.showSuccessToast('Banner Deleted Successfully');
      this.getHomePageDetailsAPICall();
    })
  }

  addBannerClick() {
    localStorage.setItem('pageId', this.pageDetails._id);
    this.router.navigate(['/cms/add-banner']);
  }

  navigateToBlockEditPage(url) {
    localStorage.setItem('pageId', this.pageDetails._id);
    this.router.navigate([url]);
  }

  editBlockDetails(url, blockData) {    
    localStorage.setItem('pageId', this.pageDetails._id);
    localStorage.setItem('block', JSON.stringify(blockData));
    this.router.navigate([url]);
  }

  deleteBlock(event, blockId) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to delete this block?',
      icon: 'fa fa-exclamation-triangle',
      accept: () => {
        this.deleteBlockAPICall(this.pageDetails._id, blockId);
      },
      reject: () => { }
    });
  }

  deleteBlockAPICall(pageId, blockId) {
    this.cmsService.deletePageBlockById(pageId, blockId).subscribe(result => {
      this.toastService.showSuccessToast(result.message)
      this.getHomePageDetailsAPICall();
    })
  }

  deleteBlockItem(event, blockId, item) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Are you sure that you want to delete this item?',
      icon: 'fa fa-exclamation-triangle',
      accept: () => {        
        this.deleteBlockItemAPICall(this.pageDetails._id, blockId, item);
      },
      reject: () => { }
    });
  }

  deleteBlockItemAPICall(pageId, blockId, item) {
    this.cmsService.deletePageBlockItemById(pageId, blockId, item).subscribe(result => {
      this.toastService.showSuccessToast(result.message)
      this.getHomePageDetailsAPICall();
    })
  }
}
