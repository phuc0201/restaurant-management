import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { PendingOrderCardComponent } from './pending-order-card/pending-order-card.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';

const routes: Routes = [
  {
    path: '',
    component: PendingOrdersComponent,
    title: 'Pending orders'
  }
];

@NgModule({
  declarations: [
    PendingOrdersComponent,
    PendingOrderCardComponent,
  ],
  imports: [
    CommonModule,
    NzGridModule,
    NzTagModule,
    RouterModule.forChild(routes)
  ]
})
export class PendingOrdersPageModule { }
