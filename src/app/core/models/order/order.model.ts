import { OrderStatus, OrderType } from "../../utils/enum";
import { Location } from "../common/location.mode";
import { Bill } from "./bill.model";
import { OrderFoodItem, OrderFoodItems } from "./order-fooditem.model";
import { UserInfo } from "./user-info.model";

export class Order<T> {
  _id: string = 'order_01';
  customer: string = '';
  phone: string = '0987654321';
  driver?: string = '';
  restaurant: string = '';
  items: OrderFoodItem<string>[] = [];
  delivery_location = new Location();
  distance: number = 0;
  duration: number = 0;
  delivery_fare: number = 0;
  order_cost: number = 0;
  order_status: OrderStatus = OrderStatus.PENDING_CONFIRM;
  order_time = new Date();
  confirm_time = new Date();
  complete_time = new Date();
  order_type: OrderType = OrderType.DELIVERY;
  bill?: T;
  cancel_reason?: string = '';
  drivers_reject: string[] = [];
}

export class PendingOrderFoodItems {
  food_id: string = '';
  quantity: number = 0;
  foodDetails: {
    name: string,
    image: string,
    price: number;
  } = {
      name: '',
      image: '',
      price: 0
    };
  modifiers: {
    name: string,
    price: number;
  }[] = [];
}

export class PendingOrder {
  _id: string = '';
  customer: {
    _id: string,
    full_name: string;
  } = {
      _id: '',
      full_name: ''
    };
  order_time = new Date();
  order_status: string = '';
  order_cost: number = 0;
  delivery_fare: number = 0;
  bill = new Bill();

  items: PendingOrderFoodItems[] = [];
}

class Customer {
  _id: string;
  full_name: string;
  avatar: string;
  phone: string;

  constructor(_id: string = '', full_name: string = '', avatar: string = '', phone: string = '') {
    this._id = _id;
    this.full_name = full_name;
    this.avatar = avatar;
    this.phone = phone;
  }
}

class DeliveryLocation {
  type: string;
  coordinates: [number, number];
  address: string;

  constructor(type: string = '', coordinates: [number, number] = [0, 0], address: string = '') {
    this.type = type;
    this.coordinates = coordinates;
    this.address = address;
  }
}





export class OrderDetails {
  _id: string;
  customer: UserInfo;
  delivery_location: DeliveryLocation;
  order_time: Date;
  confirm_time: Date;
  complete_time: Date;
  order_cost: number;
  delivery_fare: number;
  bill: Bill;
  items: OrderFoodItems[];

  constructor(
    _id: string = '',
    customer: Customer = new UserInfo(),
    delivery_location: DeliveryLocation = new DeliveryLocation(),
    order_time: Date = new Date(),
    confirm_time: Date = new Date(),
    complete_time: Date = new Date(),
    order_cost: number = 0,
    delivery_fare: number = 0,
    bill: Bill = new Bill(),
    items: OrderFoodItems[] = [],
  ) {
    this._id = _id;
    this.customer = customer;
    this.delivery_location = delivery_location;
    this.order_time = order_time;
    this.confirm_time = confirm_time;
    this.order_cost = order_cost;
    this.delivery_fare = delivery_fare;
    this.bill = bill;
    this.items = items;
    this.complete_time = complete_time;
  }
}
