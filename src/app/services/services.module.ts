import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesRoutingModule } from './services-routing.module';
import { AddServiceComponent } from './add-service/add-service.component';
import { AssignServiceComponent } from './assign-service/assign-service.component';
import { ManageServiceComponent } from './manage-service/manage-service.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AddServiceComponent,
    AssignServiceComponent,
    ManageServiceComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule
  ]
})
export class ServicesModule { }
