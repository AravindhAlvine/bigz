import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileInformationComponent implements OnInit {
  gender!: string;
  date: any;
  intrestedIn: any;

  constructor() { }

  ngOnInit(): void {
    this.date = {
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
      Year: [
        { label: 2011 },
        { label: 2012 },
        { label: 2013 },
        { label: 2014 },
        { label: 2015 },
        { label: 2016 },
        { label: 2017 },
        { label: 2018 },
        { label: 2019 },
        { label: 2020 },
        { label: 2021 },
        { label: 2022 },
      ],

    }


  }


}
