import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-review',
  templateUrl: './my-review.component.html',
  styleUrls: ['./my-review.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyReviewComponent implements OnInit {
  showNoReviews: boolean = false;
  showReviews: boolean = false;
  constructor(
  ) { }
  eventShowReviews(): void {
    this.showNoReviews = true;
    this.showReviews = true;
  }

  ngOnInit(): void {
  }

}
