import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.scss']
})
export class PendingOrdersComponent implements OnInit {
  listPendingOrders: number[] = [1,2,3];

  ngOnInit(): void {

  }

  constructor(
  ) { }
}