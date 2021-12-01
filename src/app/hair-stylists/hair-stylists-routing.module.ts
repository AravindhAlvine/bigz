import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHairStylistComponent } from './create-hair-stylist/create-hair-stylist.component';
import { ManageHairStylistsComponent } from './manage-hair-stylists/manage-hair-stylists.component';
import { VendorPlansComponent } from './vendor-plans/vendor-plans.component';
import { CreatePlansComponent } from './create-plans/create-plans.component';
import { VendorRequestComponent } from './vendor-request/vendor-request.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Vendors'
    },
    children: [
      {
        path: '',
        redirectTo: 'manage'
      },
      {
        path: 'create',
        component: CreateHairStylistComponent,
        data: {
          title: 'Create Vendor'
        }
      },
      {
        path: 'manage',
        component: ManageHairStylistsComponent,
        data: {
          title: 'Manage Vendors'
        }
      },
      {
        path: 'vendor-plans',
        component: VendorPlansComponent,
        data: {
          title: 'Manage Vendor Subscription Plans'
        }
      },
      {
        path: 'create-plans',
        component: CreatePlansComponent,
        data: {
          title: 'Create Vendor Subscription Plans'
        }
      },   
      {
        path: 'request',
        component: VendorRequestComponent,
        data: {
          title: 'Manage Vendor Request'
        }
      },     
      {
        path: 'update/:id',
        component: CreateHairStylistComponent,
        data: {
          title: 'Update Vendor'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HairStylistsRoutingModule { }
