import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantProfileComponent } from './restaurant-profile/restaurant-profile.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantProfileComponent,
    title: 'Restaurant profile'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantProfilePageRoutingModule { }
