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
      value: 20
    },
    {
      title: 'Reviews',
      value: 20
    },
    {
      title: 'Total revenue',
      value: 20000000
    },
    {
      title: 'Products',
      value: 20
    }
  ];
}
