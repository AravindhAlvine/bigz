import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryComponent } from './category/category.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ViewBasketComponent } from './view-basket/view-basket.component';
import { DetailProductPageComponent } from './detail-product-page/detail-product-page.component';
import { ShoppingBagComponent } from './shopping-bag/shopping-bag.component';


@NgModule({
  declarations: [
    IndexComponent,
    CategoryComponent,
    ProductsDetailsComponent,
    ViewBasketComponent,
    DetailProductPageComponent,
    ShoppingBagComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    SharedModule.forRoot()
  ]
})
export class HomeModule { }
