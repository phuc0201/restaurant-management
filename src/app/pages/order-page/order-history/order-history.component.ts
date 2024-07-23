import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Order } from 'src/app/core/models/order/order.model';
import { FormatService } from 'src/app/core/services/common/format.serive';
import { OrderService } from 'src/app/core/services/order.service';
import { OrderStatus, PaymentMethod } from 'src/app/core/utils/enum';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit, OnChanges {
  @Input() reload: boolean = false;
  @Input() orders: Order<string>[] = [];

  formatDate(date: Date): string {
    return this.formatService.formatDate(date.toString());
  }

  getTagColorForOrderStatus(orderStatus: string): string {
    let color = '';
    switch (orderStatus) {
      case OrderStatus.CANCELLED:
        color = 'red';
        break;
      case OrderStatus.COMPLETED:
        color = 'green';
        break;
      case OrderStatus.FAILED:
        color = 'red';
        break;
      case OrderStatus.ALLOCATING:
        color = 'orange';
        break;
      case OrderStatus.DROPPING_OFF:
        color = 'orange';
        break;
      case OrderStatus.PENDING_CONFIRM:
        color = 'orange';
        break;
      case OrderStatus.PROGRESSING:
        color = 'yellow';
        break;
      case OrderStatus.PENDING_PICKUP:
        color = 'orange';
        break;
      case OrderStatus.PICKING_UP:
        color = 'orange';
        break;
    }
    return color;
  }

  getTagColorForPaymentMethod(paymentType: string): string {
    let color = '';
    switch (paymentType) {
      case PaymentMethod.CASH:
        color = 'lime';
        break;
      case PaymentMethod.VNPAY:
        color = 'blue';
        break;
      default:
        color = 'purple';
        break;
    }
    return color;
  }

  getAllDeliveryOrder() {

  }

  ngOnInit(): void {
    this.getAllDeliveryOrder();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["reload"].currentValue === true) {
      this.getAllDeliveryOrder();
    }
  }

  constructor(
    private orderService: OrderService,
    private formatService: FormatService
  ) { }
}
