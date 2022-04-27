import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {
  profileMenu: any = [
    { name: 'Account Overview', routerLink:"/account/profile-information", icons: '../../../assets/images/icon/icon-payment-options.svg' },
    { name: 'My orders', routerLink:"/account/order", icons: '../../../assets/images/icon/icon-payment-options.svg' },
    { name: 'My Return', routerLink:"/account/return", icons: '../../../assets/images/icon/icon-payment-options.svg' },
    { name: 'Payment Method', routerLink:"/account/payments", icons: '../../../assets/images/icon/icon-payment-options.svg' },
    { name: 'Social Account', routerLink:"/account/social-account", icons: '../../../assets/images/icon/icon-payment-options.svg' },
    { name: 'Gift cards & Voucher', routerLink:"/account/giftVoucher", icons: '../../../assets/images/icon/icon-payment-options.svg' },
    { name: 'Logout', routerLink:"/*", icons: '../../../assets/images/icon/icon-payment-options.svg' },
  ];
  constructor(
    // private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
  }


}
