import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-wish-list',
  templateUrl: './my-wish-list.component.html',
  styleUrls: ['./my-wish-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyWishListComponent implements OnInit {
  showAddItem: boolean = false;
  showDialogCreateFolder: boolean = false;
  showFolderList: boolean = false;
  wishlistItems: boolean = false;

  eventShowItem(): void { }
  
  eventCreateFolder(): void {
    this.showDialogCreateFolder = true;
  }
  eventShowFolderList(): void {
    this.showDialogCreateFolder = false;
    this.showFolderList =  true;
    this.wishlistItems = true
  }
  constructor() { }

  ngOnInit(): void {
  }

}
