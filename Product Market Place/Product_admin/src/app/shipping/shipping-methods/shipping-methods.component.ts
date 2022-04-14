import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { CategoriesFilter } from 'src/app/models/Categories';
import { getCategoriesWithSubcategoriesList } from 'src/app/models/CategoriesResponses';
import { UpdateCategory } from 'src/app/models/CategoryRequests';
import { Status } from 'src/app/models/Status';
import { UpdateSubCategories } from 'src/app/models/SubCategoryRequests';
import { CATEGORY_STATUS } from 'src/assets/data/status';
import { ShippingService } from '../shipping.service';

interface City {
  name: string,
  code: string
}

interface Days {
  option: string,
  value: string
}


@Component({
  selector: 'app-shipping-methods',
  templateUrl: './shipping-methods.component.html',
  styleUrls: ['./shipping-methods.component.scss']
})
export class ShippingMethodsComponent implements OnInit {

  loading: boolean = false;
  categoryList: getCategoriesWithSubcategoriesList[] = [];
  searchCategoryText: string = '';

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

  categoryStatus: Status[] = CATEGORY_STATUS;

  selectedDropdown: any[] = [];
  value: Date;
  filterSection: boolean = true;
  filterItems: CategoriesFilter = {} as CategoriesFilter;
  appliedFiltersLength = 0;

  // checked: boolean = true;


  constructor(
    private shippingService: ShippingService,
    private router: Router,
    private confirmationService: ConfirmationService
  ) {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];

    this.optionDays = [
      { option: 'Today', value: '30' },
      { option: 'Yesterday', value: '10' },
      { option: 'This Week', value: '20' },
      { option: 'This Month', value: '40' },
      { option: 'Last Month', value: '40' },
      { option: 'All Time', value: '40' },
      { option: 'Custom', value: '40' },
    ];

    this.selectedDropdown = [
      { name: 'Approved', value: 'AP' },
      { name: 'Declined', value: 'DC' },
      { name: 'Pending', value: 'PE' },
      { name: 'Deleted', value: 'DL' },
    ]

  }

  ngOnInit(): void {
    this.dd = this.today.getDate();
    this.mm = this.today.getMonth();
    this.yyyy = this.today.getFullYear();
    this.currentDate = new Date(this.yyyy, this.mm, this.dd);

    this.getCategoriesWithSubCategories(this.filterItems);
  }

  editCategory(category: getCategoriesWithSubcategoriesList) {
    this.navigateToEditCategoryPage(category);
  }

  getCategoriesWithSubCategories(filter) {
    this.shippingService.getCategoriesWithSubcategories(this.searchCategoryText, filter).subscribe(result => {
      this.categoryList = result.data;
      console.log('this.categoryList', this.categoryList);
    })
  }

  navigateToEditCategoryPage(category: getCategoriesWithSubcategoriesList) {
    this.router.navigate(['/shipping/edit-shipping-method']);
    localStorage.setItem('editCategory', JSON.stringify(category));
  }

  enableDisableCategory(event: any, category: getCategoriesWithSubcategoriesList) {
    const isChecked = event.target.checked;
    const categoryStatus = isChecked ?
      this.getCategoryStatusRequestData('enable', 'Enable')
      : this.getCategoryStatusRequestData('disable', 'Disable');
    if (category.is_sub_category)
      this.updateSubCategoryAPICall(category._id!, categoryStatus);
    else
      this.updateCategoryAPICall(category._id!, categoryStatus);
  }

  updateSubCategoryAPICall(id: string, request: UpdateSubCategories) {
    this.shippingService.updateSubCategoryById(id, request).subscribe(result => {
      this.getCategoriesWithSubCategories(this.filterItems);
    })
  }

  updateCategoryAPICall(id: string, request: UpdateCategory) {
    this.shippingService.updateCategoryById(id, request).subscribe(result => {
      this.getCategoriesWithSubCategories(this.filterItems);
    })
  }

  getCategoryStatusRequestData(name: string, displayName: string) {
    const status: Status = {
      name: name,
      display_name: displayName
    }
    const categoryStatus = {
      status: status
    };
    return categoryStatus;
  }

  deleteCategory(event: any, category: getCategoriesWithSubcategoriesList) {
    if (category.vendors_count > 0) {
      this.confirmationService.confirm({
        target: event.target,
        message: 'This category is currently in use by vendors, Are you sure that you want to delete?',
        icon: 'fa fa-exclamation-triangle',
        accept: () => {
          this.deleteCategoryOrSubCategory(category);
        },
        reject: () => { }
      });
    } else {
      this.deleteCategoryOrSubCategory(category);
    }
  }

  deleteCategoryOrSubCategory(category: getCategoriesWithSubcategoriesList) {
    const categoryStatus = this.getCategoryStatusRequestData('deleted', 'Deleted')
    if (category.is_sub_category)
      this.updateSubCategoryAPICall(category._id!, categoryStatus);
    else
      this.updateCategoryAPICall(category._id!, categoryStatus);
  }

  statusChangeEvent(category) {
    const categoryStatus = {
      approval_status: category.approval_status
    }
    if (category.is_sub_category)
      this.updateSubCategoryAPICall(category._id, categoryStatus);
    else
      this.updateCategoryAPICall(category._id, categoryStatus);
  }

  submitFilter() {
    this.appliedFiltersLength = Object.values(this.filterItems).length;
    this.getCategoriesWithSubCategories(this.filterItems);
  }

  onFromDateSelect() {
    if(!this.filterItems.to_date) {
      this.filterItems.to_date = this.filterItems.from_date;
    }
  }
}

