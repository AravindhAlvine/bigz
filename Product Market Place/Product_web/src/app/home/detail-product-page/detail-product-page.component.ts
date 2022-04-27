import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../models/product';

@Component({
  selector: 'app-detail-product-page',
  templateUrl: './detail-product-page.component.html',
  styleUrls: ['./detail-product-page.component.scss']
})
export class DetailProductPageComponent implements OnInit {

  breadCrumbsitems: any = [];
  products: any = [];
  responsiveOptions: any;
  valueGroup: any;
  city: any;
  selectedCategory: any = null;

  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' },
  ];

  items: any;
  activeItem: any;

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.breadCrumbsitems = [
      { label: 'Home' },
      { label: 'Category' },
      { label: 'Fashion and Beauty' },
      { label: 'Men Shoes' },
      { label: 'Lebron Witness 5' },
    ];

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

    this.items = [
      { label: 'Description'},
      { label: 'Specification'},
      { label: 'Review'},
      { label: 'Return'},
      { label: 'Contact'}
    ];
    this.activeItem = this.items[0];
  }

  selectedCarosel() {

  }



}
