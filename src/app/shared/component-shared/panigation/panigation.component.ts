import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
const plugins = [
  CommonModule,
  NzPaginationModule
];
@Component({
  selector: 'app-panigation',
  templateUrl: './panigation.component.html',
  styleUrls: ['./panigation.component.scss'],
  standalone: true,
  imports: plugins
})
export class PanigationComponent {
  @Input() pageNumber: number = 1;
}
