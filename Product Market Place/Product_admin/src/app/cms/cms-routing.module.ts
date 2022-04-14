import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagePageComponent } from './manage-page/manage-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BannerEditComponent } from './banner-edit/banner-edit.component';
import { ContentEditComponent } from './content-edit/content-edit.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { PromotionsEditComponent } from './promotions-edit/promotions-edit.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'CMS'
    },
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'manage-page',
        component: ManagePageComponent,
        data: {
          title: 'Manage Page'
        }
      },
      {
        path: 'add-page',
        component: AddPageComponent,
        data: {
          title: 'Add Page'
        }
      },
      {
        path: 'banner-edit',
        component: BannerEditComponent,
        data: {
          title: 'Banner Edit'
        }
      },
      {
        path: 'add-banner',
        component: BannerEditComponent,
        data: {
          title: 'Add Banner'
        }
      },
      {
        path: 'content-edit',
        component: ContentEditComponent,
        data: {
          title: 'Content Edit'
        }
      },
      {
        path: 'product-edit',
        component: ProductEditComponent,
        data: {
          title: 'Product Edit'
        }
      },
      {
        path: 'category-edit',
        component: CategoryEditComponent,
        data: {
          title: 'Category Edit'
        }
      },
      {
        path: 'promotions-edit',
        component: PromotionsEditComponent,
        data: {
          title: 'Category Edit'
        }
      },
      {
        path: 'home',
        component: HomePageComponent,
        data: {
          title: 'Home'
        }
      },
      {
        path: 'update/:id',
        component: AddPageComponent,
        data: {
          title: 'Update Page'
        }
      },
      {
        path: 'vendor-edit',
        component: VendorEditComponent,
        data: {
          title: 'Vendor Edit'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
