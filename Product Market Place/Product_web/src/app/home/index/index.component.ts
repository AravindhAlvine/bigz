import { Component, OnInit } from '@angular/core';
import { IndexService } from './index.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  
  products!: Product[];
  responsiveOptions: any;

  productData: any;

  constructor(private productService: IndexService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 4,
        numScroll: 4
      },
      {
        breakpoint: '768px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '420px',
        numVisible: 2,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {

    this.products = [
      {
        "id": "0",
        "code": "f230fh0g3",
        "name": "Bamboo Watch",
        "description": "Product Description",
        "image": "Story 1 photo",
        "price": 65,
        "category": "Accessories",
        "quantity": 24,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "1",
        "code": "nvklal433",
        "name": "Black Watch 2",
        "description": "Product Description",
        "image": "Story 2 photo",
        "price": 72,
        "category": "Accessories",
        "quantity": 61,
        "inventoryStatus": "INSTOCK",
        "rating": 4
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

    ]

    this.productData = [
      {
        id: 0,
        name: 'Pamper Your Feet With our Shoes',
        title: 'Fashion',
        para: 'Everything you need for glowing skin',
        btn: 'Go to Fashion'
      },
      {
        id: 1,
        name: 'Get Best Gaming Experience',
        title: 'Fashion',
        para: 'Everything you need for glowing skin',
        btn: 'Go to Electronic'
      },
      {
        id: 2,
        name: 'Productive with New Smartphone',
        title: 'Fashion',
        para: 'Everything you need for glowing skin',
        btn: 'Shop Now'
      },
    ]

  }

}
