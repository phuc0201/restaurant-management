import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

interface Breadcrumb {
  url: string,
  title: string;
  icon: string,
}

const plugins = [
  CommonModule,
  NzBreadCrumbModule,
  RouterModule
];
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  standalone: true,
  imports: plugins,
})
export class BreadcrumbComponent {
  @Input() breadcrum = {
    url: '',
    title: '',
    icon: ''
  };
}
