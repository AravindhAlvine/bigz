import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { IndexService } from '../index/index.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsDetailsComponent implements OnInit {
  images: any[];
  newStores: any;
  myReviews: any;
  checkedquantity: boolean;
  showAddItem: boolean = false;
  heartIcon: boolean = false;
  breadCrumbsitems: MenuItem[];

  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 7
      },
      {
          breakpoint: '960px',
          numVisible: 1
      },
      {
          breakpoint: '768px',
          numVisible: 6,
          
      },
      {
          breakpoint: '560px',
          numVisible: 0,
          
      }
  ];
  constructor(
    private mockService: IndexService
  ) { }

  getNewStores(): void{
    this.mockService.getShopByCatogory().subscribe((res: any) => {
      this.newStores = res.newGRDStores
    })
  }

  getReviews(): void {
    this.mockService.getShopByCatogory().subscribe((res: any) => {
      this.myReviews = res.reviews;
    })
  }

  eventShowItem(): void {
    this.showAddItem = true
  }
  

  ngOnInit(): void {
    this.breadCrumbsitems = [
      {label: 'Grocery'},
      {label: 'Dairy & Eggs'},
      {label: 'Dairy'},
      {label: 'Milk'}
  ];
    this.getNewStores();
    this.getReviews();
    this.mockService.getShopByCatogory().subscribe((res: any) => {
      this.images = res.productDetails;
    })
  }
  liketoggle(): void {
    this.heartIcon = !this.heartIcon;
  }

}
