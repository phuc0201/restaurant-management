import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLConstant } from '../constants/url.constant';
import { Order, OrderDetails, PendingOrder } from '../models/order/order.model';
import { OrderStatus } from '../utils/enum';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = URLConstant.API.END_POINT + '/order';

  constructor(
    private http: HttpClient
  ) { }

  getAllDeliveryOrder(): Observable<Order<string>[]> {
    return this.http.get<Order<string>[]>(this.baseUrl + '/all');
  }

  getAllOrderHistoryForCustomer(id: string): Observable<Order<string>[]> {
    return this.http.get<Order<string>[]>(URLConstant.API.END_POINT + `/admin/customer/${id}/order-history`);
  }

  getOrderDetails(id: string): Observable<OrderDetails> {
    return this.http.get<OrderDetails>(this.baseUrl + `/${id}` + '/details');
  }

  getOrderByState(state: OrderStatus): Observable<PendingOrder[]> {
    let orderState = '';
    switch (state) {
      case OrderStatus.PENDING_CONFIRM:
        orderState = 'pending-confirm';
        break;
      case OrderStatus.COMPLETED:
        orderState = 'completed';
        break;
      case OrderStatus.CANCELLED:
        orderState = 'cancelled';
        break;
      case OrderStatus.PROGRESSING:
        orderState = 'progressing';
        break;
    }

    return this.http.get<PendingOrder[]>(this.baseUrl + `/state/${orderState}`);
  }

  acceptOrder(orderId: string) {
    return this.http.get(this.baseUrl + `/restaurant/accept/${orderId}`);
  }

  completeOrder(orderId: string) {
    return this.http.get(this.baseUrl + `/restaurant/complete/${orderId}`);
  }

  rejectOrder(orderId: string, cancel_reason: string) {
    return this.http.post(this.baseUrl + `/restaurant/reject`, {
      cancel_reason: '',
      id: orderId
    });
  }
}
