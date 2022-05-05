import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-steps',
  templateUrl: './return-steps.component.html',
  styleUrls: ['./return-steps.component.scss']
})
export class ReturnStepsComponent implements OnInit {

  selectedValue!: string;
  deFaultTabOpen: number = 0;
  returnItems: any;
  TextAreaValue: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra imperdiet sed dictum ';
  returnDropdown: any = [
    {
      returnItem: [
        { name: 'Return : Refund' },
        { name: 'Keep this item' },
      ],
      returnReason: [
        { name: 'Poor Quality' },
        { name: 'Damaged' },
      ]
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.returnItems = [
      {
        selectItem_1: [

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
        ],

        selectItem_2: [
          {
            label: 'Drop off your return parcel to any Australia Post Office or Red box so we can track it safety back to us for FREE',
            img: '../../../assets/images/icon/deliveredBy.svg',
            checkBox_label: 'Drop Off Ar A Post Office Or Red Box',
          },

          {
            label: 'Drop off your parcel 7 days a week to your choise of 1500 trusted local store including pharmacies, convenince store and storage centres open late nights and weekend for FREE',
            img: '../../../assets/images/icon/parcel_point.svg',
            checkBox_label: 'Drop Off Ar A Post Office Or Red Box',
            location: 'Find Location Near You',
          },

        ],

        selectItem_3: [

          {
            img: '../../../assets/images/home_page/carosel/image 109-depositphotos-bgremover 1.svg',
            name: 'Cools Hood Sweatshirt',
            address: 'BA420AA34RYV-5052313',
            size: 'AU M',
            reason: 'Poor Quality - Fabric feels cheap.',
            refund: '$83.99 will be refunded to your original payment method. ',
            price: '$83.99',
            info: 'Your refund will be processed within 10 business days*'
          },

        ],

      }

    ]



  }

  onTabOpen(evt: any) {
    console.log(evt.index);
  }

  returnDelivary(index: number) {
    this.deFaultTabOpen = index;
    if (index == 3) {
      this.router.navigateByUrl('/return-order');
    }
  }


}
