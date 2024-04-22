import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    PendingOrdersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PendingOrdersPageModule { }
