import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IndexService } from '../index/index.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './view-basket.component.html',
  styleUrls: ['./view-basket.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewBasketComponent implements OnInit {
  checkOuts: any;
  newStores: any;
  myReviews: any;
  
  showAddItem: boolean = false;
  heartIcon: boolean = false;

  constructor(
    private mockService: IndexService
  ) { }

  getCaegoryItem(): void {
    this.mockService.getShopByCatogory().subscribe((res: any) => {
      this.checkOuts = res.checkOuts
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

  ngOnInit(): void {
    this.getCaegoryItem();
    this.getNewStores();
  }

  liketoggle(): void {
    this.heartIcon = !this.heartIcon;
  }

}
