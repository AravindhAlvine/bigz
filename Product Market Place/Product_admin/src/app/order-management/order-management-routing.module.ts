import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllOrderComponent } from '../order-management/all-order/all-order.component';
import { WithdrawRequestComponent } from './request/withdraw-request/withdraw-request.component';
import { CancellationRequestComponent } from './request/cancellation-request/cancellation-request.component';
import { ReturnRefundRequestComponent } from './request/return-refund-request/return-refund-request.component';
import { SellerDetailsComponent } from './request/seller-details/seller-details.component';
import { OrderRequestComponent } from './order-request/order-request.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'all-order', },
      { path: 'all-order', component: AllOrderComponent, },
      { path: 'order-requests', component: OrderRequestComponent, },

      // { path: 'withdraw-req', component: WithdrawRequestComponent, },
      // { path: 'cancel-request', component: CancellationRequestComponent, },
      // { path: 'return-refund-request', component: ReturnRefundRequestComponent, },
      // { path: 'seller-details', component: SellerDetailsComponent, },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderManagementRoutingModule { }
