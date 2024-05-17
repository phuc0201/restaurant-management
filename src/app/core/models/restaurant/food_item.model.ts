import { IModifierGroupsDTO } from "./modifier-groups.mode";

export interface IFoodItem {
  id: string;
  name: string;
  bio: string;
  image: string;
  price: number;
  modifier_groups: string[];
}

export class FoodItemDTO {
  name!: string;
  bio?: string;
  image?: File;
  price!: number;
  modifier_groups!: IModifierGroupsDTO[];
}

export class CreateFoodItemDTO extends FoodItemDTO {
  category_id!: string;
}
