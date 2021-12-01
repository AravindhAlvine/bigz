import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddServiceComponent } from './add-service/add-service.component';
import { AssignServiceComponent } from './assign-service/assign-service.component';
import { ManageServiceComponent } from './manage-service/manage-service.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Customers'
    },
    children: [
      {
        path: '',
        redirectTo: 'manage'
      },
      {
        path: 'manage',
        component: ManageServiceComponent,
        data: {
          title: 'Manage Service'
        }
      },
      {
        path: 'add',
        component: AddServiceComponent,
        data: {
          title: 'Add Service'
        }
      },
      {
        path: 'assign',
        component: AssignServiceComponent,
        data: {
          title: 'Assign Service'
        }
      },
      {
        path: 'update',
        component: AddServiceComponent,
        data: {
          title: 'Update Service'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
