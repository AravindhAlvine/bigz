import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { menuItems } from 'src/assets/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  screenWidth: number;
  items = menuItems;
  messageFromChild: boolean;

  constructor() { 
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      // set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
    };
  }

  ngOnInit(): void {
  }

  parentWillTakeAction(message) {
    this.messageFromChild = message;
    console.log('F_T', message);
  }

}
