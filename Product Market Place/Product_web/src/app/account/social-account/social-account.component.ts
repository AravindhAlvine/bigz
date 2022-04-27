import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-account',
  templateUrl: './social-account.component.html',
  styleUrls: ['./social-account.component.scss']
})
export class SocialAccountComponent implements OnInit {


  socailConnection: any = [
    { name: 'Facebook', icons: '../../../assets/product/icon-facebook.svg' },
    { name: 'Twitter', icons: '../../../assets/product/icon-twitter.svg' },
    { name: 'Google', icons: '../../../assets/product/icon-google.svg' },
    { name: 'Apple', icons: '../../../assets/product/icon-apple.svg' },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
