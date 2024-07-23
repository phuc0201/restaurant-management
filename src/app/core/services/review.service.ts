import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLConstant } from '../constants/url.constant';
import { ReviewFoodItem } from '../models/restaurant/reviews.mode';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseUrl = URLConstant.API.END_POINT;
  constructor(
    private http: HttpClient
  ) { }

  getReviewForFoodItem(food_id: string): Observable<ReviewFoodItem[]> {
    return this.http.get<ReviewFoodItem[]>(this.baseUrl + `/restaurant/reviews/${food_id}`);
  }

}
