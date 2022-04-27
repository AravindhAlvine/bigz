import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { IndexComponent } from './index/index.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ViewBasketComponent } from './view-basket/view-basket.component';
import { DetailProductPageComponent } from './detail-product-page/detail-product-page.component';
import { ShoppingBagComponent } from './shopping-bag/shopping-bag.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'home',
    component: IndexComponent
  },
  {
    path:'category',    
    children: [
      {
        path:'',
        component: CategoryComponent,
      },
      {
        path: 'products-details',
        component: ProductsDetailsComponent
      },

    ]
  },
  {
    path: 'viewbasket',
    component: ViewBasketComponent
  },

  {
    path: 'detailed-product',
    component: DetailProductPageComponent,
  },

  {
    path:'shopping-bag',
    component: ShoppingBagComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
