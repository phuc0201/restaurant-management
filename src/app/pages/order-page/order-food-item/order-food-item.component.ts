import { Component, Input } from '@angular/core';
import { OrderFoodItems } from 'src/app/core/models/order/order-fooditem.model';


@Component({
  selector: 'app-order-food-item',
  templateUrl: './order-food-item.component.html',
  styleUrls: ['./order-food-item.component.scss']
})
export class OrderFoodItemComponent {
  @Input() foodItem = new OrderFoodItems();

  get calculateTotalPrice() {
    const totalPrice = this.foodItem.foodDetails.price + this.foodItem.modifiers.reduce((total, curr) => {
      return total + curr.price;
    }, 0);
    return totalPrice * this.foodItem.quantity;
  }
}
