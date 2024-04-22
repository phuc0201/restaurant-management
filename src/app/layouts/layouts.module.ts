import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    MainHeaderComponent,
    MainSidebarComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    RouterModule
  ]
})
export class LayoutsModule { }
