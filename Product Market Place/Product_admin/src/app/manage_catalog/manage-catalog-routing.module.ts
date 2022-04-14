import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCategoryComponent } from './m_c_category/add-category/add-category.component';
import { ManageCategoryComponent } from './m_c_category/manage-category/manage-category.component';
import { AddAttributeComponent } from './M_C_Attribute/add-attribute/add-attribute.component';
import { ManageAttributeComponent } from './M_C_Attribute/manage-attribute/manage-attribute.component';
import { ManageProductComponent } from './m_c_product/manage-product/manage-product.component';
import { AddProductComponent } from './m_c_product/add-product/add-product.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'manage-product', },
      { path: 'create-product', component: AddProductComponent, },
      { path: 'manage-product', component: ManageProductComponent, },
      { path: 'create-category', component: AddCategoryComponent, },
      { path: 'manage-category', component: ManageCategoryComponent, },
      { path: 'create-attribute', component: AddAttributeComponent, },
      { path: 'manage-attribute', component: ManageAttributeComponent, },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageCatalogRoutingModule { }
