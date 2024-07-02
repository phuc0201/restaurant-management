import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  isLoading: boolean = true;
  tabIndexSelected: number = 2;
  loadOrders() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 700);
  }

  ngOnInit(): void {
    this.loadOrders();
  }
}
