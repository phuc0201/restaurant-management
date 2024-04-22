import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RestaurantState } from "./restaurant.state";

export const selectRestaurantState = createFeatureSelector<RestaurantState>('restaurant');

export const selectInfoSelector = createSelector(
  selectRestaurantState,
  (state) => state.info
);
