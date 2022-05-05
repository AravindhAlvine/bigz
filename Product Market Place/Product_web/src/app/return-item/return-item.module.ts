import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ReturnItemRoutingModule } from './return-item-routing.module';
import { YourOrderComponent } from './your-order/your-order.component';
import { ReturnRulesComponent } from './return-rules/return-rules.component';
import { ReturnStepsComponent } from './return-steps/return-steps.component';


@NgModule({
  declarations: [
    YourOrderComponent,
    ReturnRulesComponent,
    ReturnStepsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReturnItemRoutingModule
  ]
})
export class ReturnItemModule { }
