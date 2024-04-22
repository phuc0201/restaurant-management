import { IFoodItem } from "./food_item.model";

export interface IRestaurantCategory {
  id: string;
  name: string;
  bio: string;
  food_items: IFoodItem[];
}
