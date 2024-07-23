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
        loadChildren: () => import('./dashboard-page/dashboard-page.module').then(m => m.DashboardPageModule),
        data: {
          breadcrumb: 'Dashboard'
        },
      },
      {
        path: 'order',
        loadChildren: () => import('./order-page/order-page.module').then(m => m.OrderPageModule),
        data: {
          breadcrumb: 'Order'
        },
      },
      {
        path: 'restaurant',
        loadChildren: () => import('./restaurant-page/restaurant-page.module').then(m => m.RestaurantPageModule),
        title: 'Restaurant',
        data: {
          breadcrumb: 'Menu'
        },
      },
      {
        path: 'category',
        loadChildren: () => import('./category-page/category-page.module').then(m => m.CategoryPageModule),
        title: 'Category',
        data: {
          breadcrumb: 'Category'
        },
      },
      {
        path: 'campaign',
        loadChildren: () => import('./campaign-page/campaign-page.module').then(m => m.CampaignPageModule),
        title: 'Campaign',
        data: {
          breadcrumb: 'Campaign'
        },
      },
      {
        path: 'account',
        loadChildren: () => import('./account-page/account-page.module').then(m => m.AccountPageModule),
        title: 'Account',
        data: {
          breadcrumb: 'Account'
        },
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
