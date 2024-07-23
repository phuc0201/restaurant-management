import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { BreadcrumbComponent } from 'src/app/shared/component-shared/breadcrumb/breadcrumb.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ListAccountComponent } from './list-account/list-account.component';

const routes: Routes = [
  {
    path: '',
    component: ListAccountComponent,
    title: 'Account'
  },
  {
    path: ':id/details',
    component: AccountDetailsComponent,
    title: 'Account',
    data: {
      breadcrumb: 'Details'
    }
  }
];


@NgModule({
  declarations: [
    ListAccountComponent,
    AccountDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BreadcrumbComponent,
    NzModalModule,
    NzTableModule,
    NzTagModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountPageModule { }
