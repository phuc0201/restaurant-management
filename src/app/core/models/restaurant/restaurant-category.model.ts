
export class RestaurantCategory<T> {
  _id: string = '';
  name: string = '';
  bio: string = '';
  image?: string = '';
  food_items: T[] = [];
  createdAt: string = '';
  updatedAt: string = '';
}

export class RestaurantCategoryDTO {
  _id?: string;
  name: string = '';
  bio: string = '';
  food_items: string[] = [];
}
