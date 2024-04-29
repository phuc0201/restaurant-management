import { IRestaurant } from "../../models/restaurant/restaurant.model";

export interface RestaurantState {
  info: IRestaurant;
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
