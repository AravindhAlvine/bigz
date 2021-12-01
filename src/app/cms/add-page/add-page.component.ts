import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from 'src/app/models/Status';
import { ToastService } from 'src/app/shared/services/toast.service';
import { CmsService } from '../cms.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {
  pageDetails = {};
  currentPageId: string;
  isEditMode: boolean = false;
  status: Status = {
    name: 'active',
    display_name: 'Active'
  } as Status;
  approvalStatus: Status = {
    name: 'published',
    display_name: 'Published'
  } as Status;
  bannersToUpload: Array<File> = [];
  uploadAssestsformData = new FormData();

  constructor(
    private cmsService: CmsService,
    private toastService: ToastService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.isUrlContainsEditId();
  }

  savePageDetails() {
    this.pageDetails['status'] = this.status;
    this.pageDetails['approval_status'] = this.approvalStatus;    
    this.createPageAPICall();
  }

  createPageAPICall() {
    this.cmsService.createPage(this.pageDetails).subscribe(result => {
      this.currentPageId = result.data._id;
      this.uploadAssets();
    })
  }

  bannersChangeEvent(event) {
    for (let file of event.currentFiles) {
      this.bannersToUpload.push(file);
    }
  }

  uploadBanners() {
    for (let banner of <Array<File>>this.bannersToUpload) {
      this.uploadAssestsformData.append("banners", banner);
    }
  }

  uploadAssets() {
    this.uploadBanners();
    this.uploadAssetsAPICall();
  }

  uploadAssetsAPICall() {
    this.cmsService.uploadAssets(this.uploadAssestsformData, this.currentPageId).subscribe(result => {
      if (this.isEditMode)
        this.toastService.showSuccessToast('Page details updated Successfully');
      else
        this.toastService.showSuccessToast('Page Created Successfully');
    })
  }

  onStatusChange(status) {
    this.status.name = status;
    this.status.display_name = status[0].toUpperCase() + status.slice(1);
  }

  onApprovalStatusChange(status) {
    this.approvalStatus.name = status;
    this.approvalStatus.display_name = status[0].toUpperCase() + status.slice(1);
  }

  isUrlContainsEditId() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.currentPageId = params['id'];
        this.isEditMode = true;
        this.getPageDetailsAPICall(params['id']);
      }
    })
  }

  getPageDetailsAPICall(id) {
    this.cmsService.getPageDetailsById(id).subscribe(result => {
      this.pageDetails = result.data
      this.status = result.data.status;
      this.approvalStatus = result.data.approval_status;
    })
  }

  async editPageDetails() {
    // if (form.valid) {
      this.pageDetails['status'] = this.status;
      this.pageDetails['approval_status'] = this.approvalStatus;  
      await this.updatePageAPICall(this.currentPageId, this.pageDetails);
      this.router.navigateByUrl('cms/manage-page')
      this.uploadAssets();
    // }
  }

  updatePageAPICall(id, request) {
    this.cmsService.savePageDetails(id, request).subscribe(result => {
    })
  }
}
