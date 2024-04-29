import { ILocation } from "../common/location.mode";
import { IRestaurantCategory } from "./restaurant-category.mode";

export interface IRestaurant {
  id: string,
  cuisine_categories: string[],
  restaurant_categories: IRestaurantCategory[],
  status: string,
  bio: string,
  location: ILocation,
  address: string,
  name: string,
  review: string,
  avatar: string,
  cover_image: string,
  profile: string,
  tier: string;
}
