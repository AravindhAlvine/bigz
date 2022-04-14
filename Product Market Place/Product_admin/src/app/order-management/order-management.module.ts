import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { OrderManagementRoutingModule } from './order-management-routing.module';
import { AllOrderComponent } from '../order-management/all-order/all-order.component';
import { WithdrawRequestComponent } from './request/withdraw-request/withdraw-request.component';
import { CancellationRequestComponent } from './request/cancellation-request/cancellation-request.component';
import { ReturnRefundRequestComponent } from './request/return-refund-request/return-refund-request.component';
import { SellerDetailsComponent } from './request/seller-details/seller-details.component';
import { OrderRequestComponent } from './order-request/order-request.component';

@NgModule({
  declarations: [
    AllOrderComponent,
    WithdrawRequestComponent,
    CancellationRequestComponent,
    ReturnRefundRequestComponent,
    SellerDetailsComponent,
    OrderRequestComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrderManagementRoutingModule,
  ]
})
export class OrderManagementModule { }
