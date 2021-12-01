import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { MainCategoriesService } from 'src/app/main-categories/main-categories.service';
import { getCategoriesWithSubcategoriesList } from 'src/app/models/CategoriesResponses';
import { CmsBlockItem, CmsBlockRequest, CmsBlockResponse } from 'src/app/models/CMS';
import { ToastService } from 'src/app/shared/services/toast.service';
import { CmsService } from '../cms.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class CategoryEditComponent implements OnInit {
  isEditMode: boolean = false;
  existingCategoryList: getCategoriesWithSubcategoriesList[] = [];
  blockDetails: CmsBlockResponse = {
    title: '',
    items: []
  } as CmsBlockResponse;
  pageId: string;
  constructor(
    private categoriesService: MainCategoriesService,
    private cmsService: CmsService,
    private toastService: ToastService,
    private router: Router,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.getPageId();
    this.isEditCategoryMode();
    this.getCategoriesWithSubCategories();
  }

  getPageId() {
    this.pageId = localStorage.getItem('pageId');
  }

  addNewItemToCategories() {
    this.blockDetails.items.push(this.getNewCategoryItem())
  }

  getNewCategoryItem() {
    const newItem: CmsBlockItem = {
      _id: null,
      name: null,
      profile: {
        file_name: null,
        url: null
      },
      slug: null,
      is_disabled: false
    }
    return newItem;
  }

  onCategoryChangeEvent(event, index) {
    const choosenCategory = this.getSelectedCategoryById(event.value);
    this.blockDetails.items[index].slug = choosenCategory.slug;
    this.blockDetails.items[index].profile = choosenCategory.profile;
  }

  getSelectedCategoryById(id) {
    const data = this.existingCategoryList.filter(category => {
      return category._id == id;
    })
    return data[0];
  }

  getCategoriesWithSubCategories() {
    this.categoriesService.getCategoriesWithSubcategories('').subscribe(result => {
      this.existingCategoryList = result.data;
    })
  }

  savePageDetailsAPICall() {
    const requestBody = this.getSaveBlockDetailsRequestBody();
    this.cmsService.savePageDetails(this.pageId, requestBody).subscribe(result => {
      this.toastService.showSuccessToast('Category block saved successfully');
      this.router.navigate(['/cms/home']);
    })
  }

  getSaveBlockDetailsRequestBody() {
    const body: CmsBlockRequest = {
      title: this.blockDetails.title,
      items: this.blockDetails.items.map(item => {
        return item._id
      }),
      block_type: 'category'
    }
    if (this.blockDetails) {
      body._id = this.blockDetails._id;
    }
    return body;
  }

  saveCategories() {
    this.savePageDetailsAPICall()
  }

  isEditCategoryMode() {
    this.blockDetails = JSON.parse(localStorage.getItem('block')) || { title: '', items: [] };
    if (Object.keys(this.blockDetails).length > 0 && this.blockDetails.items.length > 0) {
      this.isEditMode = true;
      this.blockDetails.items.map(item => {
        item.is_disabled = true;
      })
    } else {
      this.addNewItemToCategories();
    }
  }

  ngOnDestroy() {
    localStorage.removeItem('block');
    localStorage.removeItem('pageId');
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
        this.toastService.showSuccessToast(result.message);
        this.blockDetails.items.splice(index, 1);
      })
    } else {
      this.blockDetails.items.splice(index, 1);
    }
  }
}
