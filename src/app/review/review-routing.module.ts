import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageReviewComponent } from './manage-review/manage-review.component';
import { AddReviewiComponent } from './add-reviewi/add-reviewi.component';
import { ManageVendorComponent } from './manage-vendor/manage-vendor.component';
import { EditVendorComponent } from './edit-vendor/edit-vendor.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Review'
    },
    children: [
      {
        path: '',
        redirectTo: 'manage-vendor-review'
      },
      {
        path: 'manage-product-review',
        component: ManageReviewComponent,
        data: {
          title: 'Manage Product Review'
        }
      },
      {
        path: 'edit-product-review',
        component: AddReviewiComponent,
        data: {
          title: 'Edit Product Review'
        }
      },
      {
        path: 'manage-vendor-review',
        component: ManageVendorComponent,
        data: {
          title: 'Manage Vendor Review'
        }
      },
      {
        path: 'edit-vendor-review/:id',
        component: EditVendorComponent,
        data: {
          title: 'Edit Vendor Review'
        }
      }
       
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewRoutingModule { }
