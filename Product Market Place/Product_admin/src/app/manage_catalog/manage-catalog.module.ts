import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCatalogRoutingModule } from './manage-catalog-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AddCategoryComponent } from './m_c_category/add-category/add-category.component';
import { ManageCategoryComponent } from './m_c_category/manage-category/manage-category.component';
import { AddAttributeComponent } from './M_C_Attribute/add-attribute/add-attribute.component';
import { ManageAttributeComponent } from './M_C_Attribute/manage-attribute/manage-attribute.component';
import { ManageProductComponent } from './m_c_product/manage-product/manage-product.component';
import { AddProductComponent } from './m_c_product/add-product/add-product.component';


@NgModule({
  declarations: [
    AddCategoryComponent,
    ManageCategoryComponent,
    AddAttributeComponent,
    ManageAttributeComponent,
    ManageProductComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ManageCatalogRoutingModule
  ]
})
export class ManageCatalogModule { }
