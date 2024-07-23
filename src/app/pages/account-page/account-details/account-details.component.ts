import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/core/models/account/account.model';
import { Order } from 'src/app/core/models/order/order.model';
import { AccountService } from 'src/app/core/services/account.service';
import { FormatService } from 'src/app/core/services/common/format.serive';
import { OrderService } from 'src/app/core/services/order.service';
import { OrderStatus } from 'src/app/core/utils/enum';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  account = new Account();
  orders: Order<string>[] = [];
  ordersForSearch: Order<string>[] = [];
  searchValue: string = '';
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

  formatDate(date: Date): string {
    return this.formatService.formatDate(date.toString());
  }

  normalizeString(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  search(address: string) {
    setTimeout(() => {
      this.ordersForSearch = this.orders.filter(order => this.normalizeString(order.delivery_location.address.toLowerCase()).includes(this.normalizeString(address.toLowerCase())));
    }, 700);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.accSrv.getAccountDetails(id).subscribe({
      next: (data) => {
        this.account = data;
      }
    });

    this.orderSrv.getAllOrderHistoryForCustomer(id).subscribe({
      next: (data) => {
        this.orders = data;
        this.ordersForSearch = data;
      }
    });
  }

  constructor(
    private accSrv: AccountService,
    private route: ActivatedRoute,
    private formatService: FormatService,
    private orderSrv: OrderService
  ) { }
}
