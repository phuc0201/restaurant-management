import { Component } from '@angular/core';

@Component({
  selector: 'app-list-total-value-card',
  templateUrl: './list-total-value-card.component.html',
  styleUrls: ['./list-total-value-card.component.scss']
})
export class ListTotalValueCardComponent {
  listData = [
    {
      title: 'Orders',
      value: 8
    },
    {
      title: 'Customers',
      value: 4
    },
    {
      title: 'Total revenue',
      value: 640000
    },
    {
      title: 'Foods',
      value: 19
    }
  ];
}
