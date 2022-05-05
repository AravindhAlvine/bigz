import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-order',
  templateUrl: './your-order.component.html',
  styleUrls: ['./your-order.component.scss']
})
export class YourOrderComponent implements OnInit {

  returnOrders: any = [];

  constructor() { }

  ngOnInit(): void {
    this.returnOrders = [
      {
        headTitle: [
          {
            label: 'Parcel 1', date: 'Fri 3rd of Dec', shipped: 0,

            productDeatails: [
              {
                img: '../../../assets/images/home_page/carosel/image 109-depositphotos-bgremover 1.svg',
                name: 'Carson Leather Gusset Boots',
                unitPrice: '$139.99',
                discountPrice: '$56.00',
                creditValue: '$56.00',
                paid: '$83.99',
                quantity: '1',
                size: '11',
                color: 'Blue'
              },

              {
                img: '../../../assets/images/home_page/carosel/image 109-depositphotos-bgremover 1.svg',
                name: 'Carson Leather Gusset Boots',
                unitPrice: '$139.99',
                discountPrice: '$56.00',
                creditValue: '$56.00',
                paid: '$83.99',
                quantity: '1',
                size: '11',
                color: 'Blue'
              },

            ]
          }
        ]
      },

      {
        headTitle: [
          {
            label: 'Parcel 1', date: 'Fri 3rd of Dec', shipped: 0,

            productDeatails: [
              {
                img: '../../../assets/images/home_page/carosel/image 109-depositphotos-bgremover 1.svg',
                name: 'Carson Leather Gusset Boots',
                unitPrice: '$139.99',
                discountPrice: '$56.00',
                creditValue: '$56.00',
                paid: '$83.99',
                quantity: '1',
                size: '11',
                color: 'Blue'
              },
            ]
          }
        ]
      },

    ]
  }

}
