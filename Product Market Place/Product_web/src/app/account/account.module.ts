import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AccountRoutingModule } from './account-routing.module';
import { IndexComponent } from './index/index.component';
import { ProfileInformationComponent } from './account-setting/profile-information/profile-information.component';
import { ManageAddressComponent } from './account-setting/manage-address/manage-address.component';
import { ChangePasswordComponent } from './account-setting/change-password/change-password.component';
import { SaveCardComponent } from './payments/save-card/save-card.component';
import { CouponsComponent } from './mystuff/coupons/coupons.component';
import { MyReviewComponent } from './mystuff/my-review/my-review.component';
import { AllNotificationsComponent } from './mystuff/all-notifications/all-notifications.component';
import { MyWishListComponent } from './mystuff/my-wish-list/my-wish-list.component';
import { OrderComponent } from './order/order.component';
import { ReturnComponent } from './return/return.component';
import { SocialAccountComponent } from './social-account/social-account.component';
import { GiftVoucherComponent } from './gift-voucher/gift-voucher.component';

@NgModule({
  declarations: [
    IndexComponent,
    ProfileInformationComponent,
    ManageAddressComponent,
    ChangePasswordComponent,
    SaveCardComponent,
    CouponsComponent,
    MyReviewComponent,
    AllNotificationsComponent,
    MyWishListComponent,
    OrderComponent,
    ReturnComponent,
    SocialAccountComponent,
    GiftVoucherComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule.forRoot()
  ]
})
export class AccountModule { }
