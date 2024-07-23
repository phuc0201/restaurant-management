import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { BreadcrumbComponent } from 'src/app/shared/component-shared/breadcrumb/breadcrumb.component';
import { PanigationComponent } from 'src/app/shared/component-shared/panigation/panigation.component';
import { CreateFoodItemComponent } from './create-food-item/create-food-item.component';
import { FoodItemDetailsComponent } from './food-item-details/food-item-details.component';
import { FormFoodDetailsComponent } from './form-food-details/form-food-details.component';
import { ListRestaurantFoodItemComponent } from './list-restaurant-food-item/list-restaurant-food-item.component';


const routes: Routes = [
  {
    path: '',
    component: ListRestaurantFoodItemComponent,
    title: 'Restaurant'
  },
  {
    path: 'category/:cateID/food-details/:id',
    component: FoodItemDetailsComponent,
    title: 'Restaurant',
    data: {
      breadcrumb: 'Food-details'
    },
  },
  {
    path: 'create-food',
    component: CreateFoodItemComponent,
    title: 'Restaurant',
    data: {
      breadcrumb: 'Create New'
    },
  }
];

const plugins = [
  PanigationComponent,
  BreadcrumbComponent,
  NzEmptyModule,
  NzRateModule
];
@NgModule({
  declarations: [
    ListRestaurantFoodItemComponent,
    FoodItemDetailsComponent,
    FormFoodDetailsComponent,
    CreateFoodItemComponent
  ],
  imports: [
    CommonModule,
    NzModalModule,
    NzIconModule,
    NzSegmentedModule,
    NzBreadCrumbModule,
    NzUploadModule,
    NzTabsModule,
    RouterModule.forChild(routes),
    NzTableModule,
    NzDividerModule,
    NzInputModule,
    NzSelectModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzGridModule,
    RouterModule,
    plugins
  ]
})
export class RestaurantPageModule { }
