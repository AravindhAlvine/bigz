import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {
  deviveryOption2!: boolean;
  deviveryOption1!: boolean;
  showPlaceOrder!: boolean;
  constructor() { }

  ngOnInit(): void {
    
  }
  showDilogPlaceOrder(): void {
    this.showPlaceOrder = true
  }
  hideDilogPlaceOrder(): void {
    this.showPlaceOrder = false
  }

}
