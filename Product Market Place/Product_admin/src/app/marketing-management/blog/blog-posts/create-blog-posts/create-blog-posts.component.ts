import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Categories } from 'src/app/models/Categories';
import { UpdateCategory } from 'src/app/models/CategoryRequests';
import { GetCategoryListResponse } from 'src/app/models/CategoryResponses';
import { SubCategories } from 'src/app/models/SubCategories';
import { UpdateSubCategories } from 'src/app/models/SubCategoryRequests';
import { ToastService } from 'src/app/shared/services/toast.service';
// import { ManageCateoriesService } from '../../manage_catalog.service';
import { MarketingManagementService } from '../../../marketing-management.service';

@Component({
  selector: 'app-create-blog-posts',
  templateUrl: './create-blog-posts.component.html',
  styleUrls: ['./create-blog-posts.component.scss']
})
export class CreateBlogPostsComponent implements OnInit {
  profileImgError: boolean = false;
  selectedCategoryId: string = '';
  categoryList: GetCategoryListResponse[] = [];
  categoryData: Array<any> = [];
  isEditMode: boolean = false;
  form!: NgForm;
  uploadAssestsformData = new FormData();
  iconToUpload!: File;
  bannerToUpload!: File;
  profileToupload: File;
  currentCategoryId!: string;
  currentSubCategoryId!: string;
  SelectedTab: any = 0;

  ApprovedStatus: any = [
    { name: 'Approved', checked: true },
    { name: 'Pending', checked: false },
    { name: 'Declined', checked: false },
  ]

  PostStatus: any = [
    { name: 'Publish', checked: true },
    { name: 'Draft', checked: false },
  ]

  ActiveStatus: any = [
    { name: 'Active', checked: true },
    { name: 'Deactive', checked: false },
  ]

  constructor(
    private marketingManagementService: MarketingManagementService,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCategoryListAPICall();
    const editCategoryData = JSON.parse(localStorage.getItem('editCategory')!);
    if (editCategoryData) {
      this.isEditMode = true;
      this.categoryData.push(editCategoryData);
      this.selectedCategoryId = editCategoryData.category ? editCategoryData.category._id : null;
    } else {
      this.addNewItemToCategoryData();
    }
  }

  getCategoryListAPICall() {
    this.marketingManagementService.getCategoryList().subscribe(result => {
      this.categoryList = result.data;
    })
  }

  AddMoreCategory() {
    this.addNewItemToCategoryData();
  }

  getNewCategoryItem() {
    const newItem = {
      name: '',
      slug: '',
      meta_title: '',
      meta_description: ''
    }
    return newItem;
  }

  removeCategoryItem(index: number) {
    this.categoryData.splice(index, 1);
  }

  addNewItemToCategoryData() {
    this.categoryData.push(this.getNewCategoryItem())
  }

  saveCategories(form: NgForm) {
    this.form = form;
    if (form.valid)
      if (this.selectedCategoryId) {
        this.createSubCategories();
      } else {
        this.createCategories();
      }
  }

  createSubCategories() {
    this.categoryData.map(item => {
      item.category = this.selectedCategoryId;
    })
    const request: SubCategories[] = this.categoryData;
    this.saveSubcategoriesAPICall(request);
  }

  createCategories() {
    const request: Categories[] = this.categoryData;
    this.createCategoryAPICall(request);
  }

  createCategoryAPICall(request: Categories[]) {
    this.marketingManagementService.createCategory(request).subscribe(result => {
      this.currentCategoryId = result.data[0]._id!;
      this.generateUploadAssetsBody();
      this.uploadCategoryAssetsAPICall();
      // this.toastService.showSuccessToast(result.message);
      this.resetForm();
    })
  }

  generateUploadAssetsBody() {
    this.uploadAssestsformData.append('icon', this.iconToUpload);
    this.uploadAssestsformData.append('banner', this.bannerToUpload);
    this.uploadAssestsformData.append('profile', this.profileToupload);
  }

  iconChangeEvent(event: any) {
    this.iconToUpload = <File>event.currentFiles[0];
  }

  bannerChangeEvent(event: any) {
    this.bannerToUpload = <File>event.currentFiles[0];
  }


  profileChangeEvent(event: any, fileUpload) {
    const reader = new FileReader();
    reader.readAsDataURL(event.currentFiles[0]);
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result as string;
      img.onload = () => {
        const height = img.naturalHeight;
        const width = img.naturalWidth;
        if (width >= 468 && height >= 582) {
          this.profileImgError = false;
          this.profileToupload = <File>event.currentFiles[0];
        } else {
          fileUpload.clear();
          this.profileImgError = true;
        }
      };
    };
  }

  uploadCategoryAssetsAPICall() {
    this.marketingManagementService.uploadCategoryAssets(this.uploadAssestsformData, this.currentCategoryId).subscribe(result => {
      if (this.isEditMode){
        this.toastService.showSuccessToast('Category details updated Successfully');
        this.router.navigate(['/manage-catalog/manage-category']);
      }
      else{
        this.toastService.showSuccessToast('Category Created Successfully');
        this.router.navigate(['/manage-catalog/manage-category']);
        this.form.resetForm();
      }
    })
  }

  uploadSubCategoryAssetsAPICall() {
    this.marketingManagementService.uploadSubCategoryAssets(this.uploadAssestsformData, this.currentSubCategoryId).subscribe(result => {
      if (this.isEditMode){
        this.toastService.showSuccessToast('Sub Category details updated Successfully');
        this.router.navigate(['/manage-catalog/manage-category']);
      }
      else{
        this.toastService.showSuccessToast('Sub Category Created Successfully');
        this.router.navigate(['/manage-catalog/manage-category']);
    }
      this.form.resetForm();
    })
  }

  editCategory(form: NgForm) {
    this.form = form;
    if (form.valid) {
      const data = this.categoryData[0];
      if (data.is_sub_category) {
        const requestBody = this.getEditSubCategoryRequestBody(data);
        this.currentSubCategoryId = data['_id'];
        this.editSubCategoryAPICall(data['_id'], requestBody);
      } else {
        const requestBody = this.getEditCategoryRequestBody(data);
        this.currentCategoryId = data['_id'];
        this.editCategoryAPICall(data['_id'], requestBody);
      }
    }
  }

  editSubCategoryAPICall(id: string, request: UpdateSubCategories) {
    this.marketingManagementService.updateSubCategoryById(id, request).subscribe(result => {
      this.generateUploadAssetsBody();
      this.uploadSubCategoryAssetsAPICall();
      // this.toastService.showSuccessToast(result.message);
      this.resetForm();
      this.router.navigateByUrl('categories/manage');
    })
  }

  editCategoryAPICall(id: string, request: UpdateCategory) {
    this.marketingManagementService.updateCategoryById(id, request).subscribe(result => {
      this.generateUploadAssetsBody();
      this.uploadCategoryAssetsAPICall();
      // this.toastService.showSuccessToast(result.message);
      this.resetForm();
      this.router.navigateByUrl('categories/manage');
    })
  }

  ngOnDestroy() {
    localStorage.removeItem('editCategory');
  }

  getEditCategoryRequestBody(params: Categories) {
    const body: Categories = {
      name: params.name,
      slug: params.slug,
      meta_title: params.meta_title,
      meta_description: params.meta_description,
      description1: params.description1,
      description2: params.description2
    }
    return body;
  }

  getEditSubCategoryRequestBody(params: SubCategories) {
    const body: SubCategories = {
      name: params.name,
      slug: params.slug,
      meta_title: params.meta_title,
      meta_description: params.meta_description,
      category: this.selectedCategoryId,
      description1: params.description1,
      description2: params.description2
    }
    return body;
  }

  resetForm() {
    this.form.resetForm();
  }

  async createSlug(index: number) {
    if (this.categoryData[index]['name']) {
      if (this.selectedCategoryId) {
        this.categoryData[index]['slug'] = await this.generateSubCategorySlugAPICall(this.categoryData[index]['name']);
      } else {
        this.categoryData[index]['slug'] = await this.generateCategorySlugAPICall(this.categoryData[index]['name']);
      }
    }
  }

  generateCategorySlugAPICall(title: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.marketingManagementService.generateCategorySlug({ title: title }).subscribe(result => {
        resolve(result.data.slug);
      })
    })
  }

  generateSubCategorySlugAPICall(title: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.marketingManagementService.generateSubCategorySlug({ title: title }).subscribe(result => {
        resolve(result.data.slug);
      })
    })
  }

  // showCategoryDetailsClick(index: number, form: NgForm) {
  //   if (form.valid) {
  //     document.getElementById(`showCategoryDetails${index}`)!.classList.remove('display-none');
  //     document.getElementById(`showCategoryDescription${index}`)!.classList.add('display-none');
  //     document.getElementById(`showCategoryImages${index}`)!.classList.add('display-none');
  //   }
  // }

  showCategoryDescriptionClick(index: number, form: NgForm, value: number) {
    if (form.valid) {
      // this changes the scrolling behavior to "smooth"
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (value == 0) {
        this.SelectedTab = 1;
        document.getElementById(`showCategoryDetails${index}`)!.classList.add('display-none');
        document.getElementById(`showCategoryDescription${index}`)!.classList.remove('display-none');
        document.getElementById(`showCategoryImages${index}`)!.classList.add('display-none');
      }
      else if (value == 1) {
        this.SelectedTab = 2;
        document.getElementById(`showCategoryDetails${index}`)!.classList.add('display-none');
        document.getElementById(`showCategoryDescription${index}`)!.classList.add('display-none');
        document.getElementById(`showCategoryImages${index}`)!.classList.remove('display-none');
      }

    }
  }

  // showCategoryImagesClick(index: number, form: NgForm) {
  //   if (form.valid) {
  //     document.getElementById(`showCategoryDetails${index}`)!.classList.add('display-none');
  //     document.getElementById(`showCategoryDescription${index}`)!.classList.add('display-none');
  //     document.getElementById(`showCategoryImages${index}`)!.classList.remove('display-none');
  //   }
  // }

  goPrevious(index: number, value: any) {
    // this changes the scrolling behavior to "smooth"
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (value == 0) {
      this.SelectedTab = 0;
      document.getElementById(`showCategoryDetails${index}`)!.classList.remove('display-none');
      document.getElementById(`showCategoryDescription${index}`)!.classList.add('display-none');
      document.getElementById(`showCategoryImages${index}`)!.classList.add('display-none');
    }
    else if (value == 1) {
      this.SelectedTab = 1;
      document.getElementById(`showCategoryDetails${index}`)!.classList.add('display-none');
      document.getElementById(`showCategoryDescription${index}`)!.classList.remove('display-none');
      document.getElementById(`showCategoryImages${index}`)!.classList.add('display-none');
    }

  }

  // goPreviousToCategoryDescription(index: number) {
  //   document.getElementById(`showCategoryDetails${index}`)!.classList.add('display-none');
  //   document.getElementById(`showCategoryDescription${index}`)!.classList.remove('display-none');
  //   document.getElementById(`showCategoryImages${index}`)!.classList.add('display-none');
  // }

  saveSubcategoriesAPICall(request: SubCategories[]) {
    this.marketingManagementService.createSubCategories(request).subscribe(result => {
      this.currentSubCategoryId = result.data[0]['_id']!;
      this.generateUploadAssetsBody();
      this.uploadSubCategoryAssetsAPICall();
      // this.toastService.showSuccessToast(result.message);
      this.resetForm();
    })
  }
}
