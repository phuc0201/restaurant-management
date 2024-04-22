import { createAction, props } from "@ngrx/store";
import { IRestaurant } from "../../models/restaurant/restaurant.model";

export const GET_INFOR = '[restaurant] get infor';
export const GET_INFOR_SUCCESS = '[restaurant] get infor success';
export const GET_INFOR_FAILURE = '[restaurant] get infor failed';

export const getInfor = createAction(GET_INFOR);

export const getInfoSuccess = createAction(
  GET_INFOR_SUCCESS,
  props<{ info: IRestaurant; }>()
);

export const getInfoFailure = createAction(
  GET_INFOR_FAILURE,
  props<{ error: string; }>()
);
