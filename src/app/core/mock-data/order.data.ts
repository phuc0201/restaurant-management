import { Bill } from "../models/order/bill.model";
import { OrderFoodItem } from "../models/order/order-fooditem.model";
import { Order } from "../models/order/order.model";
import { Modifier } from "../models/restaurant/modifier.model";
import { BillStatus } from "../utils/enum";
export const OrderData = new Order<Bill>();

const bill = new Bill();
bill.discount = 10000;
bill.status = BillStatus.COMPLETED;
bill.sub_total = 50000;
bill.total = 40000;

const item1 = new OrderFoodItem<Modifier>();
item1.food_id = '6647a4011216ae8cfd4a9c21';
item1.price = 30000;
item1.quantity = 1;

const item2 = new OrderFoodItem<Modifier>();
item2.food_id = '6647a55b1216ae8cfd4a9c25';
item2.price = 30000;
item2.quantity = 1;

const item3 = new OrderFoodItem<Modifier>();
item3.food_id = '667e83a1e08e8e093112801e';
item3.price = 30000;
item3.quantity = 1;

const item4 = new OrderFoodItem<Modifier>();
item4.food_id = '667e8601e08e8e0931128071';
item4.price = 30000;
item4.quantity = 1;

const Items: OrderFoodItem<Modifier>[] = [
  item1,
  item2,
  item3,
  item4
];

OrderData.restaurant = '6640631fc9edf07952c1683e';
OrderData.bill = bill;
OrderData.customer = '665026167a34fb68fe3a8339';
OrderData.driver = '66498b23337822b8ebeb9a63';
OrderData.delivery_location.address = 'Trường Đại học Sư phạm Kỹ thuật Tp.HCM';
OrderData.delivery_location.coordinates = [106.77190584520183, 10.850663501572672];
OrderData.delivery_fare = 10000;
OrderData.distance = 4000;
OrderData.duration = 501000;
// OrderData.items = Items;
OrderData.order_cost = bill.total;
