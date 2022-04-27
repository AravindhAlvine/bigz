import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-save-card',
  templateUrl: './save-card.component.html',
  styleUrls: ['./save-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SaveCardComponent implements OnInit {
  showNewCards: boolean = true;
  showAddCards: boolean = false;
  showCardsContent: boolean = false;
  showExitingCards: boolean = false;
  constructor() { }
  eventAddCards(): void {
    this.showNewCards = false;
    this.showAddCards = true;
  }
  eventSavedCards(): void {
    this.showAddCards = false;
    this.showCardsContent = true;
    this.showExitingCards = true;

  }

  ngOnInit(): void {
  }

}
