import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';

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
        component: ManageCustomersComponent,
        data: {
          title: 'Manage Customer'
        }
      },
      {
        path: 'create',
        component: CreateCustomerComponent,
        data: {
          title: 'Add a Customer'
        }
      },
      {
        path: 'update/:id',
        component: CreateCustomerComponent,
        data: {
          title: 'Update Customer'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
