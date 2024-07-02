import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { ListOrderComponent } from './list-order/list-order.component';
import { OrderCardComponent } from './order-card/order-card.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderComponent } from './order/order.component';
const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    title: 'Order'
  }
];

const plugins = [
  NzTagModule,
  NzTabsModule,
  NzTableModule,
  NzGridModule,
  FormsModule
];

@NgModule({
  declarations: [
    OrderCardComponent,
    ListOrderComponent,
    OrderHistoryComponent,
    OrderComponent,
    OrderCardComponent,
    ListOrderComponent,
  ],
  imports: [
    CommonModule,
    plugins,
    RouterModule.forChild(routes)
  ]
})
export class OrderPageModule { }
