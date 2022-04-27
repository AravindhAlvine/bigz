import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  footerData: any;
  getRouterLink: any;

  constructor() { }

  ngOnInit(): void {

    this.footerData = [
      {
        title: "Know Us",
        name: "Contact Us",
        name2: "About Us",
        name3: "Careers",
        name4: "Ultra Stories",
        name5: "Corporate Information"
      },

      {
        title: "Help",
        name: "Payments",
        name2: "Shipping",
        name3: "Cancellation & Returns",
        name4: "FAQ",
        name5: "Report Infringement"
      },

      {
        title: "Our Policies",
        name: "Privacy Policy",
        name2: "Terms and Conditions",
        name3: "Editorial Policy",
        name4: "Return Policy",
        name5: "Ip Policy"
      },

      {
        title: "Our Services",
        name: "Order Product",
        name2: "News and articles",
        name3: "Discount for you",
      },


    ]

  }






}
