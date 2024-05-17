import { createReducer, on } from "@ngrx/store";
import * as restaurantActions from './restaurant.actions';
import { initialFoodItemState, initialResState } from "./restaurant.state";
const _restaurantReducer = createReducer(
  initialResState,
  on(restaurantActions.getInfoSuccess, (state, { info }) => {
    return {
      ...state,
      info: info
    };
  }),
  on(restaurantActions.getInfoFailure, (state, { error }) => {
    return {
      ...state,
      error: error,
    };
  }),
);

const _createFoodItemReducer = createReducer(
  initialFoodItemState,
  on(restaurantActions.createFoodItemSucess, (state, { foodItem }) => {
    return {
      ...state,
      foodItem: foodItem
    };
  }),

  on(restaurantActions.createFoodItemFailure, (state, { error }) => {
    return {
      ...state,
      error: error
    };
  })
);

export function restaurantReducer(state: any, action: any) {
  return _restaurantReducer(state, action);
}

export function createFoodItemReducer(state: any, action: any) {
  return _createFoodItemReducer(state, action);
}
