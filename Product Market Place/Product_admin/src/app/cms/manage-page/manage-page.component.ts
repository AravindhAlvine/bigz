import { Component, OnInit } from '@angular/core';
import { City, FilterDays } from 'src/app/models/Common';
import { Status } from 'src/app/models/Status';
import { ToastService } from 'src/app/shared/services/toast.service';
import { PAGE_STATUS } from 'src/assets/data/status';
import { CITY_LIST, FILTER_DAYS } from '../../../assets/data/common'
import { CmsService } from '../cms.service';
import { CategoriesFilter } from 'src/app/models/Categories';


@Component({
  selector: 'app-manage-page',
  templateUrl: './manage-page.component.html',
  styleUrls: ['./manage-page.component.scss']
})
export class ManagePageComponent implements OnInit {
  loading: boolean = false;
  pageList = [];
  cities: City[] = CITY_LIST;
  optionDays: FilterDays[] = FILTER_DAYS;
  selectedCity: City;
  selectedDays: FilterDays;

  selectedRows:any[];

  filterSection: boolean = true;
  filterItems: CategoriesFilter = {} as CategoriesFilter;

  calandarIcon = '../../../assets/icon/calandar.svg';
  reviewIcon = '../../../assets/images/review/review.svg';
  searchBtn = '../../../assets/icon/search-button.svg';

  today = new Date();
  dd: any;
  mm: any;
  yyyy: any;
  currentDate: any
  pageStatus: Status[] = PAGE_STATUS;

  constructor(
    private cmsService: CmsService,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this.getPageListAPICall();
  }

  getPageListAPICall() {
    this.cmsService.getPageList().subscribe(result => {
      this.pageList = result.data;
      // console.log('this.pageList', this.pageList)
    })
  }

  activateDeactivatePage(event, page) {
    const isChecked = event.target.checked;
    const pageStatus = isChecked ?
      this.getPageStatusRequestData('active', 'Active')
      : this.getPageStatusRequestData('deactive', 'Deactive');
    this.updatePageAPICall(page._id, pageStatus);
  }

  getPageStatusRequestData(name, displayName) {
    const status: Status = {
      name: name,
      display_name: displayName
    }
    const categoryStatus = {
      status: status
    };
    return categoryStatus;
  }

  updatePageAPICall(id, request) {
    this.cmsService.savePageDetails(id, request).subscribe(result => {
    })
  }

  async deletePage(pageId) {
    await this.deletePageAPICall(pageId);
    this.getPageListAPICall();
    this.toastService.showSuccessToast('Page Deleted Successfully');
  }

  deletePageAPICall(id) {
    return new Promise((resolve, reject) => {
      this.cmsService.deletePageById(id).subscribe(result => {
        resolve(result);
      })
    })
  }


  async approvePage(id) {
    const result = await this.approvePageAPICall(id);
    this.getPageListAPICall();
  }

  approvePageAPICall(pageId) {
    return new Promise((resolve, reject) => {
      this.cmsService.approvePageById(pageId).subscribe(result => {
        resolve(result);
      })
    })
  }

  async statusChangeEvent(page) {
    const pageStatus = {
      approval_status: page.approval_status
    }
    await this.updatePageAPICall(page._id, pageStatus);
  }
}
