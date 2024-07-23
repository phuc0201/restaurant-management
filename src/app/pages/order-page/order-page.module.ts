import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { MapComponent } from 'src/app/shared/component-shared/map/map.component';
import { ListOrderComponent } from './list-order/list-order.component';
import { OrderCardComponent } from './order-card/order-card.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderFoodItemComponent } from './order-food-item/order-food-item.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrderComponent } from './order/order.component';
import { UserInfoCardComponent } from './user-info-card/user-info-card.component';
const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    title: 'Order'
  },
  {
    path: 'details/:id',
    component: OrderDetailsComponent,
    title: 'order details',
    data: {
      breadcrumb: 'Details'
    }
  }
];

const plugins = [
  NzTagModule,
  NzTabsModule,
  NzTableModule,
  NzGridModule,
  FormsModule,
  MapComponent,
  NzTimelineModule,
  NzModalModule
];

@NgModule({
  declarations: [
    OrderCardComponent,
    ListOrderComponent,
    OrderHistoryComponent,
    OrderComponent,
    OrderCardComponent,
    ListOrderComponent,
    OrderDetailsComponent,
    UserInfoCardComponent,
    OrderFoodItemComponent,
  ],
  imports: [
    CommonModule,
    plugins,
    RouterModule.forChild(routes)
  ]
})
export class OrderPageModule { }
