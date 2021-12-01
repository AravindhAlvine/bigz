import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CmsRoutingModule } from './cms-routing.module';
import { ManagePageComponent } from './manage-page/manage-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BannerEditComponent } from './banner-edit/banner-edit.component';
import { ContentEditComponent } from './content-edit/content-edit.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { PromotionsEditComponent } from './promotions-edit/promotions-edit.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';




@NgModule({
  declarations: [
    ManagePageComponent,
    AddPageComponent,
    HomePageComponent,
    BannerEditComponent,
    ContentEditComponent,
    ProductEditComponent,
    CategoryEditComponent,
    PromotionsEditComponent,
    VendorEditComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    SharedModule
  ]
})
export class CmsModule { }
