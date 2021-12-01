import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import {ManageCustomersComponent} from './manage-customers/manage-customers.component'
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CreateCustomerComponent,
    ManageCustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ]
})
export class CustomersModule { }
