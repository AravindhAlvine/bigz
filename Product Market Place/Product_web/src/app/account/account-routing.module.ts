import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileInformationComponent } from './account-setting/profile-information/profile-information.component';
import { IndexComponent } from './index/index.component';
// import { ChangePasswordComponent } from './account-setting/change-password/change-password.component';
// import { ManageAddressComponent } from './account-setting/manage-address/manage-address.component';
// import { AllNotificationsComponent } from './mystuff/all-notifications/all-notifications.component';
// import { CouponsComponent } from './mystuff/coupons/coupons.component';
// import { MyReviewComponent } from './mystuff/my-review/my-review.component';
// import { MyWishListComponent } from './mystuff/my-wish-list/my-wish-list.component';
import { SaveCardComponent } from './payments/save-card/save-card.component';
import { OrderComponent } from './order/order.component';
import { ReturnComponent } from './return/return.component';
import { SocialAccountComponent } from './social-account/social-account.component';
import { GiftVoucherComponent } from './gift-voucher/gift-voucher.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,

    children: [
      {
        path: '',
        component: ProfileInformationComponent,
      },
      {
        path: 'profile-information',
        component: ProfileInformationComponent
      },
      // {
      //   path: 'manage-address',
      //   component: ManageAddressComponent
      // },
      // {
      //   path: 'change-password',
      //   component: ChangePasswordComponent
      // },
      // {
      //   path: 'my-coupons',
      //   component: CouponsComponent
      // },
      // {
      //   path: 'my-review-rating',
      //   component: MyReviewComponent
      // },
      // {
      //   path: 'all-notification',
      //   component: AllNotificationsComponent
      // }, {
      //   path: 'my-wishlist',
      //   component: MyWishListComponent
      // },
      {
        path: 'order',
        component: OrderComponent,
      },
      {
        path: 'return',
        component: ReturnComponent,
      },
      {
        path: 'payments',
        component: SaveCardComponent
      },
      {
        path: 'social-account',
        component: SocialAccountComponent,
      },
      {
        path: 'giftVoucher',
        component: GiftVoucherComponent,
      },

    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
