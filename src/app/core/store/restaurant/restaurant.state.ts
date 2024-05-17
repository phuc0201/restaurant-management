import { IFoodItem } from "../../models/restaurant/food_item.model";
import { IRestaurant } from "../../models/restaurant/restaurant.model";

export interface RestaurantState {
  info: IRestaurant;
  error: string;
  loading: boolean;
}

export interface FoodItemState {
  foodItem: IFoodItem;
  error: string;
  loading: boolean;
}

export const initialResState: RestaurantState = {
  info: {
    id: '',
    name: '',
    cuisine_categories: [],
    restaurant_categories: [],
    profile: '',
    status: '',
    bio: '',
    location: {
      type: '',
      coordinates: []
    },
    address: '',
    cover_image: '',
    avatar: '',
    tier: '',
    review: ''
  },
  error: '',
  loading: false
};

export const initialFoodItemState: FoodItemState = {
  foodItem: {
    id: '',
    name: "",
    bio: "",
    price: 0,
    modifier_groups: [],
    image: ""
  },
  error: '',
  loading: false
};
