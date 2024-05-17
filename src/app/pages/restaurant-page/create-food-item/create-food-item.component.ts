import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { skip, take } from 'rxjs';
import { CreateFoodItemDTO } from 'src/app/core/models/restaurant/food_item.model';
import { createFoodItem } from 'src/app/core/store/restaurant/restaurant.actions';
import { selectNewFoodItemSelector } from 'src/app/core/store/restaurant/restaurant.selector';

@Component({
  selector: 'app-create-food-item',
  templateUrl: './create-food-item.component.html',
  styleUrls: ['./create-food-item.component.scss']
})
export class CreateFoodItemComponent {
  foodDetails: CreateFoodItemDTO = {
    category_id: '66406e35e1d8ff18b83ed2a6',
    name: '',
    price: 0,
    bio: '',
    modifier_groups: []
  };

  create(): void {
    this.store.dispatch(createFoodItem({ foodItem: this.foodDetails }));
    this.store.select(selectNewFoodItemSelector).pipe(
      skip(1),
      take(1)).subscribe((foodItem) => {
        console.log(foodItem);
      });
  }

  constructor(
    private store: Store
  ) { }

}
