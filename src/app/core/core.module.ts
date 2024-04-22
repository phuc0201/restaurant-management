import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AccountEffects } from './store/auth/auth.effects';
import { authReducer } from './store/auth/auth.reducer';
import { RestaurantEffects } from './store/restaurant/restaurant.effects';
import { restaurantReducer } from './store/restaurant/restaurant.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ auth_login: authReducer, restaurant: restaurantReducer }),
    EffectsModule.forRoot([AccountEffects, RestaurantEffects])
  ]
})
export class CoreModule { }
