import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FoodItemState, RestaurantState } from "./restaurant.state";

export const selectRestaurantState = createFeatureSelector<RestaurantState>('restaurant');
export const selectNewFoodItemState = createFeatureSelector<FoodItemState>('createFoodItem');

export const selectInfoSelector = createSelector(
  selectRestaurantState,
  (state) => state.info
);

export const selectNewFoodItemSelector = createSelector(
  selectNewFoodItemState,
  (state) => state.foodItem
);
