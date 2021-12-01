import { Component, OnInit } from '@angular/core';
import { GetReviewsListResponse } from 'src/app/models/ReviewsResponses';
import { ReviewService } from '../review.service';
import { CITY_LIST, FILTER_DAYS } from '../../../assets/data/common'
import { City, FilterDays } from 'src/app/models/Common';
import { Status } from 'src/app/models/Status';
import { REVIEW_STATUS } from 'src/assets/data/status';
@Component({
  selector: 'app-manage-vendor',
  templateUrl: './manage-vendor.component.html',
  styleUrls: ['./manage-vendor.component.scss']
})
export class ManageVendorComponent implements OnInit {
  loading: boolean = false;
  cities: City[] = CITY_LIST; 
  optionDays: FilterDays[] = FILTER_DAYS;
  selectedDays: FilterDays;
  currentDate : any
  reviewsList: GetReviewsListResponse[] = [];
  reviewStatus: Status[] = REVIEW_STATUS;
  constructor(
    private reviewService: ReviewService
  ) { }
    
  ngOnInit(): void {
    this.getReviewListAPICall();
  }

  getReviewListAPICall() {
    this.reviewService.getReviewsList().subscribe(result => {
      this.reviewsList = result.data;
    })
  }

  deleteReview(reviewId) {
    this.reviewService.deleteReviewById(reviewId).subscribe(result => {
      this.getReviewListAPICall();
    })
  }

  async statusChangeEvent(review) {
    const reviewStatus = {
      status: review.status
    }
    await this.updateReviewDetailByIdAPICall(review._id, reviewStatus);
  }

  updateReviewDetailByIdAPICall(id, body) {
    this.reviewService.updateReviewById(id, body).subscribe(result => {})
  }
}
