import { createAction, props } from "@ngrx/store";
import { CreateFoodItemDTO, FoodItems } from "../../models/restaurant/food-items.model";
import { ModifierGroups } from "../../models/restaurant/modifier-groups.model";
import { Restaurant } from "../../models/restaurant/restaurant.model";

export const GET_INFOR = '[restaurant] get infor';
export const GET_INFOR_SUCCESS = '[restaurant] get infor success';
export const GET_INFOR_FAILURE = '[restaurant] get infor failed';

export const CREATE_FOOD_ITEM = '[restaurant] create food item';
export const CREATE_FOOD_ITEM_SUCCESS = '[restaurant] create food item success';
export const CREATE_FOOD_ITEM_FAILURE = '[restaurant] create food item failed';

// PROFILE
export const getInfor = createAction(GET_INFOR);

export const getInfoSuccess = createAction(
  GET_INFOR_SUCCESS,
  props<{ info: Restaurant; }>()
);

export const getInfoFailure = createAction(
  GET_INFOR_FAILURE,
  props<{ error: string; }>()
);

// CREATE FOOD ITEM
export const createFoodItem = createAction(
  CREATE_FOOD_ITEM,
  props<{ foodItem: CreateFoodItemDTO; }>()
);

export const createFoodItemSucess = createAction(
  CREATE_FOOD_ITEM_SUCCESS,
  props<{ foodItem: FoodItems<ModifierGroups>; }>()
);

export const createFoodItemFailure = createAction(
  CREATE_FOOD_ITEM_FAILURE,
  props<{ error: string; }>()
);
