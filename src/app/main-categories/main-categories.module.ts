import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCategoriesRoutingModule } from './main-categories-routing.module';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CreateCategoriesComponent,
    ManageCategoriesComponent
  ],
  imports: [
    CommonModule,
    MainCategoriesRoutingModule,
    SharedModule
  ]
})
export class MainCategoriesModule { }
