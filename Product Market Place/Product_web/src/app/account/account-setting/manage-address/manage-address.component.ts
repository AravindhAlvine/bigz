import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-manage-address',
  templateUrl: './manage-address.component.html',
  styleUrls: ['./manage-address.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ManageAddressComponent implements OnInit {
  showAddAddress: boolean;
  showSavedAddress: boolean;
  showNoAddress: boolean;
  addressType: any;
  constructor() { }
  eventShowAddreess(): void {
    this.showAddAddress = true;
    this.showNoAddress = true;
    this.showSavedAddress = false;
  }

  eventSavedAddress(): void {
    this.showSavedAddress = true;
    this.showAddAddress = false;
    this.showNoAddress = true;
  }

  ngOnInit(): void {
  }

}
