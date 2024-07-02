import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent {
  @Input() orderTypeIsPending: boolean = true;
  listPendingOrders: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}
