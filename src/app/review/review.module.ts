import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReviewRoutingModule } from './review-routing.module';
import { ManageReviewComponent } from './manage-review/manage-review.component';
import { AddReviewiComponent } from './add-reviewi/add-reviewi.component';
import { ManageVendorComponent } from './manage-vendor/manage-vendor.component';
import { EditVendorComponent } from './edit-vendor/edit-vendor.component';



@NgModule({
  declarations: [
    ManageReviewComponent,
    AddReviewiComponent,
    ManageVendorComponent,
    EditVendorComponent
  ],
  imports: [
    CommonModule,
    ReviewRoutingModule,
    SharedModule
  ]
})
export class ReviewModule { }
