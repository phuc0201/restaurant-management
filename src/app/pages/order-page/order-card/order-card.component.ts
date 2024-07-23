import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PendingOrder } from 'src/app/core/models/order/order.model';
import { FormatService } from 'src/app/core/services/common/format.serive';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent {
  @Input() orderTypeIsPending: boolean = true;
  @Input() order = new PendingOrder();
  @Output() acceptOrderEvent = new EventEmitter<string>();
  @Output() completeOrderEvent = new EventEmitter<string>();
  @Output() rejectOrderEvent = new EventEmitter<string>();
  orderIdSelected: string = '';
  cancel_reason: string = '';
  isCancelReason = false;


  handleOk(): void {
    if (this.cancel_reason !== '') {
      this.orderService.rejectOrder(this.orderIdSelected, this.cancel_reason).subscribe({
        complete: () => this.rejectOrderEvent.emit(this.orderIdSelected)
      });
      this.isCancelReason = false;
    }
  }

  handleCancel(): void {
    this.isCancelReason = false;
  }

  formatDate(date: Date): string {
    return this.formatService.formatDate(date.toString());
  }

  acceptOrder(id: string) {
    this.orderService.acceptOrder(id).subscribe({
      complete: () => this.acceptOrderEvent.emit(id)
    });
  }

  completeOrder(id: string) {
    this.orderService.completeOrder(id).subscribe({
      complete: () => this.completeOrderEvent.emit(id)
    });
  }

  rejectOrder(id: string) {
    this.orderIdSelected = id;
    this.isCancelReason = true;
  }

  constructor(
    private formatService: FormatService,
    private orderService: OrderService
  ) { }
}
