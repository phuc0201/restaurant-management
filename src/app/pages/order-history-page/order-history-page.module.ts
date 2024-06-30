import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PendingOrderCardComponent } from './pending-order-card/pending-order-card.component';
const routes: Routes = [
  {
    path: '',
    component: OrderHistoryComponent,
    title: 'Order history'
  }
];

const plugins = [
  NzTagModule
];

@NgModule({
  declarations: [
    OrderHistoryComponent,
    PendingOrderCardComponent,
    PendingOrderCardComponent
  ],
  imports: [
    CommonModule,
    plugins,
    RouterModule.forChild(routes)
  ]
})
export class OrderHistoryPageModule { }
