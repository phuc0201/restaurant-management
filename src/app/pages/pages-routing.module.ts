import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard-page/dashboard-page.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'order-history',
        loadChildren: () => import('./order-history-page/order-history-page.module').then(m => m.OrderHistoryPageModule)
      },
      {
        path: 'pending-orders',
        loadChildren: () => import('./pending-orders-page/pending-orders-page.module').then(m => m.PendingOrdersPageModule)
      },
      {
        path: 'restaurant',
        loadChildren: () => import('./restaurant-page/restaurant-page.module').then(m => m.RestaurantPageModule)
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./restaurant-profile-page/restaurant-profile-page.module').then(m => m.RestaurantProfilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
