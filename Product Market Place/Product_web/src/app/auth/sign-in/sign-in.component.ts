import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signUpCard: any = [
    { name: 'Google', img: '../../../assets/images/icon/google.svg' },
    { name: 'Apple', img: '../../../assets/images/icon/apple.svg' },
    { name: 'Facebook', img: '../../../assets/images/icon/facebook.svg' },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
