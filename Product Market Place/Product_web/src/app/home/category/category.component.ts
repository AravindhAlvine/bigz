import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { IndexService } from '../index/index.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {
  breadcrumbsMenu: any;
  newStores: any;
  CategoryFooter: any;
  BrandsSideMenu: any;
  SeasonalSideMenu: any;
  priceSideMenu:any;
  discountSideMenu:any;
  showAddItem: boolean = false;
  breadCrumbsitems: any = [];
  headerMenuItems: any = [];
  mobileFilterMenu: boolean = false;
  heartIcon: boolean = false;


  // multiselect dropdown
  selectedCities: string[] = [];
  cities: any[];
  toggleArrow: boolean = true;

  rangeValues: number[] = [20, 100];
  numberValue1: any;
  numberValue2: any;

  tagLine: any;
  starLevel: any;
  delivery: any;
  Colors: any;

  products!: Product[];
  sortFilter: any;
  activeClass: any;

  
  constructor(
    private mockService: IndexService,
    // private categoryService: CategoryService,
  ) {

    this.products = [
      {
        "id": "2",
        "code": "zz21cz3c1",
        "name": "Blue Band",
        "description": "Product Description",
        "image": "Story 3 photo",
        "price": 79,
        "category": "Fitness",
        "quantity": 2,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": "3",
        "code": "zz21cz3c1",
        "name": "Blue Band 2",
        "description": "Product Description",
        "image": "Story 4 photo",
        "price": 79,
        "category": "Fitness",
        "quantity": 2,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": "4",
        "code": "zz21cz3c1",
        "name": "Blue Band 3",
        "description": "Product Description",
        "image": "Story 5 photo",
        "price": 79,
        "category": "Fitness",
        "quantity": 2,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": "5",
        "code": "zz21cz3c1",
        "name": "Blue Band 4",
        "description": "Product Description",
        "image": "Story 6 photo",
        "price": 79,
        "category": "Fitness",
        "quantity": 2,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": "6",
        "code": "zz21cz3c1",
        "name": "Blue Band 5",
        "description": "Product Description",
        "image": "Story 7 photo",
        "price": 79,
        "category": "Fitness",
        "quantity": 2,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": "7",
        "code": "zz21cz3c1",
        "name": "Blue Band 6",
        "description": "Product Description",
        "image": "Story 8 photo",
        "price": 79,
        "category": "Fitness",
        "quantity": 2,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": "8",
        "code": "zz21cz3c1",
        "name": "Blue Band 7",
        "description": "Product Description",
        "image": "Story 9 photo",
        "price": 79,
        "category": "Fitness",
        "quantity": 2,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": "9",
        "code": "zz21cz3c1",
        "name": "Blue Band 8",
        "description": "Product Description",
        "image": "Story 9 photo",
        "price": 79,
        "category": "Fitness",
        "quantity": 2,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": "2",
        "code": "zz21cz3c1",
        "name": "Blue Band",
        "description": "Product Description",
        "image": "Story 3 photo",
        "price": 79,
        "category": "Fitness",
        "quantity": 2,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": "3",
        "code": "zz21cz3c1",
        "name": "Blue Band 2",
        "description": "Product Description",
        "image": "Story 4 photo",
        "price": 79,
        "category": "Fitness",
        "quantity": 2,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": "4",
        "code": "zz21cz3c1",
        "name": "Blue Band 3",
        "description": "Product Description",
        "image": "Story 5 photo",
        "price": 79,
        "category": "Fitness",
        "quantity": 2,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": "5",
        "code": "zz21cz3c1",
        "name": "Blue Band 4",
        "description": "Product Description",
        "image": "Story 6 photo",
        "price": 79,
        "category": "Fitness",
        "quantity": 2,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },

    ]
    
    this.sortFilter = [
      { name: "Popularity" },
      { name: "Price-Low to High" },
      { name: "Price-High to Low" },
      { name: "Newest First" },
    ];

    this.cities = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" }
    ];
  }

  
  getTaglineMenu(): void{
    this.mockService.getShopByCatogory().subscribe((res: any) => {
      this.tagLine = res.Tagline;
    })
  }

  getStartLineMenu(): void{
    this.mockService.getShopByCatogory().subscribe((res: any) => {
      this.starLevel = res.StarLevel;
    })
  }

  getDelivery() {
    this.mockService.getShopByCatogory().subscribe((res: any) => {
      this.delivery = res.Delivery;
    })
  }

  getColors() {
    this.mockService.getShopByCatogory().subscribe((res: any) => {
      this.Colors = res.colors;
    })
  }
  
  getNewStores(): void{
    this.mockService.getShopByCatogory().subscribe((res: any) => {
      this.newStores = res.newGRDStores
    })
  }
  eventShowItem(): void {
    this.showAddItem = true
  }
  getCategoryFooter(): void {
    this.mockService.getShopByCatogory().subscribe((res:any) => {
      this.CategoryFooter = res.categoryFooter
    })
  }
  getBrandsMenu(): void {
    this.mockService.getShopByCatogory().subscribe((res:any) => {
      this.BrandsSideMenu = res.brandCheckbox
    })
  }
  getSeasonalMenu(): void {
    this.mockService.getShopByCatogory().subscribe((res:any) => {
      this.SeasonalSideMenu = res.seasonal
    })
  }
  getPriceMenu(): void {
    this.mockService.getShopByCatogory().subscribe((res:any) => {
      this.priceSideMenu = res.priceFilter
    })
  }
  getDiscountMenu(): void {
    this.mockService.getShopByCatogory().subscribe((res:any) => {
      this.discountSideMenu = res.discountPrice
    })
  }
  getCategoryMenu(): void {
    this.mockService.getShopByCatogory().subscribe((res:any) => {
      this.headerMenuItems = res.headerMenu
    })
  }
  eventShowMobileFilter(): void {
    this.mobileFilterMenu = !this.mobileFilterMenu;
  }
  ngOnInit(): void {
    this.breadCrumbsitems = [
      {label: 'Grocery'},
      {label: 'Dairy & Eggs'},
      {label: 'Dairy'},
      {label: 'Milk'}
  ];
    this.getNewStores();
    this.getCategoryFooter();
    this.getBrandsMenu();
    this.getSeasonalMenu();
    this.getPriceMenu();
    this.getDiscountMenu();
    this.getCategoryMenu();
// enough
    this.getTaglineMenu();
    this.getStartLineMenu();
    this.getDelivery();
    this.getColors();
    // active services
    // this.getCategoryList();
  }


  // getCategoryList(){
  //   this.categoryService.getCategoryList().subscribe((res:any) => {
  //     // this.headerMenuItems = res.
  //     console.log('res Category', res)
  //   })
  // }
  
  liketoggle(): void {
    this.heartIcon = !this.heartIcon;
  }

  SelectedBtn(evt: any) {
    this.activeClass = evt.target.firstChild.data;
  }


}
