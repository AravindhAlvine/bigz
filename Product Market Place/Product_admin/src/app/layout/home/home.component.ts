import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { menuItems } from 'src/assets/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  screenWidth: number;
  items : MenuItem[] = menuItems;
  messageFromChild: boolean;
  toggle_effect: boolean;

  @Output() onInitEvent = new EventEmitter();


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
    this.toggle_effect = this.messageFromChild;
    // console.log('F_T', message);
  }

  HoverFormate(hover: any){
    if(this.messageFromChild == true && hover == true){
      this.toggle_effect = false;
    }
    else if(this.messageFromChild == true && hover == false){
      this.toggle_effect = true;
    }
  }

}
