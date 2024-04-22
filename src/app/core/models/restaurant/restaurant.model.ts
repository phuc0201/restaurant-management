import { ILocation } from "../common/location.mode";
import { IRestaurantCategory } from "./restaurant-category.mode";

export interface IRestaurant {
  id: string;
  name: string;
  cuisine_categories: string[];
  restaurant_categories: IRestaurantCategory[];
  profile: any;
  status: string;
  bio: string;
  location: ILocation;
  cover_image: string;
  avatar: string;
  tier: string;
}
