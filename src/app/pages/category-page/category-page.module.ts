import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { BreadcrumbComponent } from 'src/app/shared/component-shared/breadcrumb/breadcrumb.component';
import { PanigationComponent } from 'src/app/shared/component-shared/panigation/panigation.component';
import { ListCategoryComponent } from './list-category/list-category.component';

const routes: Routes = [
  {
    path: '',
    component: ListCategoryComponent,
    title: 'Category'
  }
];


const plugins = [
  PanigationComponent,
  BreadcrumbComponent,
  NzEmptyModule
];

@NgModule({
  declarations: [
    ListCategoryComponent
  ],
  imports: [
    CommonModule,
    NzBreadCrumbModule,
    NzModalModule,
    NzTableModule,
    FormsModule,
    plugins,
    RouterModule.forChild(routes)
  ]
})
export class CategoryPageModule { }
