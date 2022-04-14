import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Categories } from 'src/app/models/Categories';
import { UpdateCategory } from 'src/app/models/CategoryRequests';
import { GetCategoryListResponse } from 'src/app/models/CategoryResponses';
import { SubCategories } from 'src/app/models/SubCategories';
import { UpdateSubCategories } from 'src/app/models/SubCategoryRequests';
import { ToastService } from 'src/app/shared/services/toast.service';
import { ManageCateoriesService } from '../../manage_catalog.service';
// import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  // providers: [MessageService]

})
export class AddProductComponent implements OnInit {
  
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

  nodes3: any[];
  selectedNodes2: any[] = [];

  selectedCountries2: string[] = [];
  cities: any[];

  selectProduct: any[];
  showAttribute: any;
  checked: boolean = false;


  ApprovedStatus: any = [
    { name: 'Approved', checked: true },
    { name: 'Pending', checked: false },
    { name: 'Declined', checked: false },
  ]

  Shipping: any = [
    { name: 'Marketplace', checked: true },
    { name: 'Vendor', checked: false },
  ]

  ActiveStatus: any = [
    { name: 'Active', checked: true },
    { name: 'Deactive', checked: false },
  ]

  constructor(
    private manageCatelogService: ManageCateoriesService,
    private toastService: ToastService,
    private router: Router,
  ) {
    this.manageCatelogService.getFiles().then((files: any) => {
      console.log('files', files)
      this.nodes3 = files;
    });

    
    this.cities = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" }
    ];

    this.selectProduct = [
      { name: "Simple Product", code: 0 },
      { name: "Configurable Product", code: 1 },
    ];

  }

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
    this.manageCatelogService.getCategoryList().subscribe(result => {
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
    this.manageCatelogService.createCategory(request).subscribe(result => {
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
    this.manageCatelogService.uploadCategoryAssets(this.uploadAssestsformData, this.currentCategoryId).subscribe(result => {
      if (this.isEditMode)
        this.toastService.showSuccessToast('Category details updated Successfully');
      else
        this.toastService.showSuccessToast('Category Created Successfully');
      this.form.resetForm();
    })
  }

  uploadSubCategoryAssetsAPICall() {
    this.manageCatelogService.uploadSubCategoryAssets(this.uploadAssestsformData, this.currentSubCategoryId).subscribe(result => {
      if (this.isEditMode)
        this.toastService.showSuccessToast('Sub Category details updated Successfully');
      else
        this.toastService.showSuccessToast('Sub Category Created Successfully');
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
    this.manageCatelogService.updateSubCategoryById(id, request).subscribe(result => {
      this.generateUploadAssetsBody();
      this.uploadSubCategoryAssetsAPICall();
      // this.toastService.showSuccessToast(result.message);
      this.resetForm();
      this.router.navigateByUrl('categories/manage');
    })
  }

  editCategoryAPICall(id: string, request: UpdateCategory) {
    this.manageCatelogService.updateCategoryById(id, request).subscribe(result => {
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
      this.manageCatelogService.generateCategorySlug({ title: title }).subscribe(result => {
        resolve(result.data.slug);
      })
    })
  }

  generateSubCategorySlugAPICall(title: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.manageCatelogService.generateSubCategorySlug({ title: title }).subscribe(result => {
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
      
      // if (value == 0) {
      //   this.SelectedTab = 1;
      //   document.getElementById(`showCategoryDetails${index}`)!.classList.add('display-none');
      //   document.getElementById(`showCategoryDescription${index}`)!.classList.remove('display-none');
      //   document.getElementById(`showCategoryImages${index}`)!.classList.add('display-none');
      // }
      // else if (value == 1) {
      //   this.SelectedTab = 2;
      //   document.getElementById(`showCategoryDetails${index}`)!.classList.add('display-none');
      //   document.getElementById(`showCategoryDescription${index}`)!.classList.add('display-none');
      //   document.getElementById(`showCategoryImages${index}`)!.classList.remove('display-none');
      // }

    }
  }

  productTabs(id: any) {
    this.SelectedTab = id;
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
    this.manageCatelogService.createSubCategories(request).subscribe(result => {
      this.currentSubCategoryId = result.data[0]['_id']!;
      this.generateUploadAssetsBody();
      this.uploadSubCategoryAssetsAPICall();
      // this.toastService.showSuccessToast(result.message);
      this.resetForm();
    })
  }

  dataValue(evt: any) {
    // console.log('evt', evt.value.code);
    this.showAttribute = evt.value.code;
  }


}
