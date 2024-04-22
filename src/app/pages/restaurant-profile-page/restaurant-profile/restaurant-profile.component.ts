import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IRestaurant } from 'src/app/core/models/restaurant/restaurant.model';
import { getInfor } from 'src/app/core/store/restaurant/restaurant.actions';
import { selectInfoSelector } from 'src/app/core/store/restaurant/restaurant.selector';
import { RestaurantState } from 'src/app/core/store/restaurant/restaurant.state';

@Component({
  selector: 'app-restaurant-profile',
  templateUrl: './restaurant-profile.component.html',
  styleUrls: ['./restaurant-profile.component.scss']
})
export class RestaurantProfileComponent implements OnInit {
  restaurantInfo?: IRestaurant;
  constructor(
    private store: Store<RestaurantState>
  ) { }
  ngOnInit(): void {
    this.store.dispatch(getInfor());
    this.store.pipe(select(selectInfoSelector)).subscribe((info) => this.restaurantInfo = info);
  }
}
