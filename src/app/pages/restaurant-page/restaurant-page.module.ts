import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { PanigationComponent } from 'src/app/shared/component-shared/panigation/panigation.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantComponent,
    title: 'Restaurant'
  }
];

const plugins = [
  PanigationComponent
];
@NgModule({
  declarations: [
    RestaurantComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzTableModule,
    NzDividerModule,
    plugins
  ]
})
export class RestaurantPageModule { }
