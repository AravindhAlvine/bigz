import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetReview, PostReview } from 'src/app/models/Review';
import { Status } from 'src/app/models/Status';
import { ReviewService } from '../review.service';
@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.scss']
})
export class EditVendorComponent implements OnInit {
  currentReviewId: string;
  reviewDetails: GetReview = {} as GetReview;
  constructor(
    private activatedRoute: ActivatedRoute,
    private reviewService: ReviewService
  ) { }

  ngOnInit(): void {
    this.isUrlContainsEditId();
  }

  isUrlContainsEditId() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.currentReviewId = params['id'];
        this.getReviewDetailsAPICall(params['id']);
      }
    })
  }

  getReviewDetailsAPICall(id) {
    this.reviewService.getReviewDetailsById(id).subscribe(result => {
      this.reviewDetails = result.data;
    })
  }

  reviewDetailsIsNotEmpty() {
    return Object.keys(this.reviewDetails).length !== 0;
  }

  onReviewStatusChange(status) {
    this.reviewDetails.status.name = status;
    this.reviewDetails.status.display_name = status[0].toUpperCase() + status.slice(1);
  }

  updateReviewDetails() {
    const body = this.getUpdateReviewRequestBody();
    this.updateReviewDetailByIdAPICall(this.currentReviewId, body);
  }

  updateReviewDetailByIdAPICall(id, body) {
    this.reviewService.updateReviewById(id, body).subscribe(result => {})
  }

  getUpdateReviewRequestBody() {
    const body: PostReview = {
      status: this.reviewDetails.status,
      ratings: this.reviewDetails.ratings,
      review: this.reviewDetails.review,
      images: this.reviewDetails.images,
    }
    return body;
  }
}
