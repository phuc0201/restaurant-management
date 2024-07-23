import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { MapComponent } from 'src/app/shared/component-shared/map/map.component';
import { CircleChartComponent } from './circle-chart/circle-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListTotalValueCardComponent } from './list-total-value-card/list-total-value-card.component';
import { RatingPointsCardComponent } from './rating-points-card/rating-points-card.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { SplineChartComponent } from './spline-chart/spline-chart.component';
import { TopProductsComponent } from './top-products/top-products.component';
import { TotalValueCardComponent } from './total-value-card/total-value-card.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    title: 'Dashboard'
  }
];

const plugins = [
  MapComponent,
  NzRateModule,
  FormsModule,
  NzDrawerModule,
  NzSkeletonModule
];
@NgModule({
  declarations: [
    DashboardComponent,
    SplineChartComponent,
    TotalValueCardComponent,
    ListTotalValueCardComponent,
    CircleChartComponent,
    TopProductsComponent,
    RatingPointsCardComponent,
    ReviewDetailsComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule,
    NzGridModule,
    plugins,
    RouterModule.forChild(routes)
  ]
})
export class DashboardPageModule { }
