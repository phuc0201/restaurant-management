import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLConstant } from '../constants/url.constant';
import { IRestaurant } from '../models/restaurant/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  baseURL = URLConstant.API.END_POINT;
  constructor(
    private http: HttpClient
  ) { }

  getInfor(): Observable<IRestaurant> {
    return this.http.get<IRestaurant>(this.baseURL + URLConstant.API.RESTAURANT.PROFILE);
  }

  changeRestaurantStatus(isOpened: boolean): void {
    localStorage.setItem('isOpened', JSON.stringify(isOpened));
  }
}
