import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'manage'
      },
      {
        path: 'create',
        component: CreateCategoriesComponent,
      },
      {
        path: 'manage',
        component: ManageCategoriesComponent,
      },
      {
        path: 'update',
        component: CreateCategoriesComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainCategoriesRoutingModule { }
