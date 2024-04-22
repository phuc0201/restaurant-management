import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantProfilePageRoutingModule } from './restaurant-profile-page-routing.module';
import { RestaurantProfileComponent } from './restaurant-profile/restaurant-profile.component';


@NgModule({
  declarations: [
    RestaurantProfileComponent
  ],
  imports: [
    CommonModule,
    RestaurantProfilePageRoutingModule
  ]
})
export class RestaurantProfilePageModule { }
