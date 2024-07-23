import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order/order.model';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  reload: boolean = true;
  tabIndexSelected: number = 2;
  orders: Order<string>[] = [];

  loadOrders() {
    this.reload = true;

    this.orderService.getAllDeliveryOrder().subscribe({
      next: data => {
        this.orders = data;
      },
      complete: () => {
        setTimeout(() => {
          this.reload = false;
        }, 700);
      }
    });
  }

  reloadOrder(event: boolean) {
    if (event) {
      this.loadOrders();
    }
  }


  searchOrderHistory() {

  }

  ngOnInit(): void {
    this.loadOrders();
  }

  constructor(
    private orderService: OrderService
  ) { }
}
