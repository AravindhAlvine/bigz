import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  $list_Years: any;
  $dateCal: any;
  intrestedIn: any;

  signUpCard: any = [
    { name: 'Google', img: '../../../assets/images/icon/google.svg' },
    { name: 'Apple', img: '../../../assets/images/icon/apple.svg' },
    { name: 'Facebook', img: '../../../assets/images/icon/facebook.svg' },
  ]

  constructor() { }

  ngOnInit(): void {

    this.$dateCal = {
      Date: [
        { label: 1 },
        { label: 2 },
        { label: 3 },
        { label: 4 },
        { label: 5 },
        { label: 6 },
        { label: 7 },
        { label: 8 },
        { label: 9 },
        { label: 10 },
        { label: 11 },
        { label: 12 },
        { label: 13 },
        { label: 14 },
        { label: 15 },
        { label: 16 },
        { label: 17 },
        { label: 18 },
        { label: 19 },
        { label: 20 },
        { label: 21 },
        { label: 22 },
        { label: 23 },
        { label: 24 },
        { label: 25 },
        { label: 26 },
        { label: 27 },
        { label: 28 },
        { label: 29 },
        { label: 30 },
        { label: 31 },
      ],
      Month: [
        { label: 'Jan' },
        { label: 'Feb' },
        { label: 'Mar' },
        { label: 'Apr' },
        { label: 'May' },
        { label: 'Jun' },
        { label: 'Jul' },
        { label: 'Aug' },
        { label: 'Sep' },
        { label: 'Oct' },
        { label: 'Nov' },
        { label: 'Dec' },
      ],
    }

    const currentYear = (new Date()).getFullYear();
    const range = (start: number, stop: number, step: number) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));
    this.$list_Years = range(currentYear, currentYear - 50, -1).map((item: any) => {
      return { label: item }
    });

  }

}
