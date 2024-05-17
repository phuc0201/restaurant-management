import { Component } from '@angular/core';
import { IFoodItem } from 'src/app/core/models/restaurant/food_item.model';

@Component({
  selector: 'app-list-restaurant-food-item',
  templateUrl: './list-restaurant-food-item.component.html',
  styleUrls: ['./list-restaurant-food-item.component.scss']
})
export class ListRestaurantFoodItemComponent {
  showDetails: boolean = false;
  foodDetails: IFoodItem = {
    id: '',
    name: '',
    bio: '',
    image: '',
    price: 0,
    modifier_groups: []
  };


  options = ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'];

  handleCategoryChange(e: number): void {

  }

  showFoodDetails(data: IFoodItem): void {
    this.showDetails = true;
    this.foodDetails = data;
  }
}
