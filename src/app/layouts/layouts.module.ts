import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { BreadcrumbComponent } from '../shared/component-shared/breadcrumb/breadcrumb.component';
import { NotificationComponent } from '../shared/component-shared/notification/notification.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';

const plugins = [
  NotificationComponent,
  BreadcrumbComponent
];
@NgModule({
  declarations: [
    MainLayoutComponent,
    MainHeaderComponent,
    MainSidebarComponent
  ],
  imports: [
    CommonModule,
    plugins,
    NzLayoutModule,
    RouterModule,
    NzBadgeModule,
    NzPopoverModule,
    NzToolTipModule
  ]
})
export class LayoutsModule { }
