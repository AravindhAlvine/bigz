import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GetCategoryListResponse } from '../models/CategoryResponses';
import { GeneralResponse } from '../models/GeneralResponse';
import { GetReview, PostReview } from '../models/Review';
import { GetReviewsListResponse } from '../models/ReviewsResponses';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(
    private http: HttpClient
  ) { }

  getReviewsList(): Observable<GeneralResponse<GetReviewsListResponse[]>> {
    return this.http.get<GeneralResponse<GetReviewsListResponse[]>>(environment.reviews.getReviewList)
      .pipe(
        map(result => result)
      );
  }

  getReviewDetailsById(id: string): Observable<GeneralResponse<GetReview>> {
    return this.http.get<GeneralResponse<GetReview>>(environment.reviews.getReviewDetailsById.replace(':id', id))
      .pipe(
        map(result => result)
      );
  }

  updateReviewById(id: string, body: PostReview): Observable<GeneralResponse<GetReview>> {
    return this.http.put<GeneralResponse<GetReview>>(environment.reviews.updateReviewById.replace(':id', id), body)
      .pipe(
        map(result => result)
      );
  }


  deleteReviewById(id: string): Observable<GeneralResponse<null>> {
    return this.http.delete<GeneralResponse<null>>(environment.reviews.deleteReviewById.replace(':id', id))
      .pipe(
        map(result => result)
      );
  }
}
