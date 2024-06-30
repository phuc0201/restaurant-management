import { FoodItems } from "../../models/restaurant/food-items.model";
import { ModifierGroups } from "../../models/restaurant/modifier-groups.model";
import { Restaurant } from "../../models/restaurant/restaurant.model";

export interface RestaurantState {
  info: Restaurant;
  error: string;
  loading: boolean;
}

export interface FoodItemState {
  foodItem: FoodItems<ModifierGroups>;
  error: string;
  loading: boolean;
}

export const initialResState: RestaurantState = {
  info: new Restaurant(),
  error: '',
  loading: false
};

export const initialFoodItemState: FoodItemState = {
  foodItem: new FoodItems<ModifierGroups>(),
  error: '',
  loading: false
};
