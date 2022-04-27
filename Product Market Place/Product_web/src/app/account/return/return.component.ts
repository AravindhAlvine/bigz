import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.scss']
})
export class ReturnComponent implements OnInit {

  
  OrderDetail: any = [
    {
      deliveryDate: 'Delivery Sunday, Octor 10TH, 2021', orderNo: "658051248", shippedDate: 'Sep 21, 2021',
      productImg: [
        { img: '../../../assets/images/home_page/carosel/image 109-depositphotos-bgremover 1.svg' },
        { img: '../../../assets/images/home_page/carosel/image 109-depositphotos-bgremover 1.svg' },
        { img: '../../../assets/images/home_page/carosel/image 109-depositphotos-bgremover 1.svg' },
        { img: '../../../assets/images/home_page/carosel/image 109-depositphotos-bgremover 1.svg' },
        { img: '../../../assets/images/home_page/carosel/image 109-depositphotos-bgremover 1.svg' },
      ]
    },
    {
      deliveryDate: 'Delivery Sunday, Octor 10TH, 2021', orderNo: "658051248", shippedDate: 'Sep 21, 2021',
      productImg: [
        { img: '../../../assets/images/home_page/carosel/image 109-depositphotos-bgremover 1.svg' },
        { img: '../../../assets/images/home_page/carosel/image 109-depositphotos-bgremover 1.svg' },
        { img: '../../../assets/images/home_page/carosel/image 109-depositphotos-bgremover 1.svg' },
        { img: '../../../assets/images/home_page/carosel/image 109-depositphotos-bgremover 1.svg' },
        { img: '../../../assets/images/home_page/carosel/image 109-depositphotos-bgremover 1.svg' },
        { img: '../../../assets/images/home_page/carosel/image 109-depositphotos-bgremover 1.svg' },
      ]
    },
    {
      deliveryDate: 'Delivery Sunday, Octor 10TH, 2021', orderNo: "658051248", shippedDate: 'Sep 21, 2021',
      productImg: [
        { img: '../../../assets/images/home_page/carosel/image 109-depositphotos-bgremover 1.svg' },
        { img: '../../../assets/images/home_page/carosel/image 109-depositphotos-bgremover 1.svg' },
        { img: '../../../assets/images/home_page/carosel/image 109-depositphotos-bgremover 1.svg' },
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
