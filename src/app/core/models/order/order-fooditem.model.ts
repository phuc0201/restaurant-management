
export class OrderFoodItem<T> {
  food_id: string = '';
  quantity: number = 0;
  price: number = 0;
  modifiers: T[] = [];
}
class FoodDetails {
  name: string;
  image: string;
  price: number;

  constructor(name: string = '', image: string = '', price: number = 0) {
    this.name = name;
    this.image = image;
    this.price = price;
  }
}


export class OrderFoodItems {
  food_id: string;
  quantity: number;
  foodDetails: FoodDetails;
  modifiers: {
    name: string,
    price: number;
  }[];

  constructor(food_id: string = '', quantity: number = 0, foodDetails: FoodDetails = new FoodDetails(), modifiers: {
    name: string,
    price: number;
  }[] = []) {
    this.food_id = food_id;
    this.quantity = quantity;
    this.foodDetails = foodDetails;
    this.modifiers = modifiers;
  }
}
