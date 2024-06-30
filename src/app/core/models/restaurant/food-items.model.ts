import { ModifierGroupsDTO } from "./modifier-groups.model";

export class FoodItems<T> {
  _id: string = '';
  name: string = 'Loading....';
  bio: string = 'Loading....';
  image: string = '';
  price: number = 0;
  modifier_groups: T[] = [];
  createdAt: string = '';
  updatedAt: string = '';
  category_id?: string = '';
}

export class FoodItemDTO<T> {
  _id?: string = '';
  name: string = '';
  bio: string = '';
  image: string = '';
  price: number = 0;
  modifier_groups: T[] = [];
}

export class CreateFoodItemDTO extends FoodItemDTO<ModifierGroupsDTO> {
  category_id: string = '';
}

export class DeleteFoodItemDTO {
  category_id: string = '';
  foodItem_id: string = '';
}

export class UpdateFoodItemDTO extends FoodItemDTO<ModifierGroupsDTO> {

}
