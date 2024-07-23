import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PendingOrder } from 'src/app/core/models/order/order.model';
import { OrderService } from 'src/app/core/services/order.service';
import { OrderStatus } from 'src/app/core/utils/enum';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit, OnChanges {
  @Input() orderTypeIsPending: boolean = true;
  @Input() reload: boolean = false;
  @Output() reloadChange = new EventEmitter<boolean>();
  listPendingOrders: PendingOrder[] = [];

  loadOrder() {
    if (this.orderTypeIsPending) {
      this.orderService.getOrderByState(OrderStatus.PENDING_CONFIRM).subscribe({
        next: data => {
          this.listPendingOrders = data;
        }
      });
    }
    if (!this.orderTypeIsPending) {
      this.orderService.getOrderByState(OrderStatus.PROGRESSING).subscribe({
        next: data => {
          this.listPendingOrders = data;
        }
      });
    }
  }

  acceptOrder(orderId: string) {
    this.listPendingOrders = this.listPendingOrders.filter(order => order._id != orderId);
    this.reloadChange.emit(true);
  }

  completeOrder(orderId: string) {
    this.listPendingOrders = this.listPendingOrders.filter(order => order._id != orderId);
    this.reloadChange.emit(true);
  }

  rejectOrder(orderId: string) {
    this.listPendingOrders = this.listPendingOrders.filter(order => order._id != orderId);
    this.reloadChange.emit(true);
  }

  ngOnInit(): void {
    this.loadOrder();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["reload"].currentValue === true) {
      this.loadOrder();
    }
  }
  constructor(
    private orderService: OrderService
  ) { }
}
