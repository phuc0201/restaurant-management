import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { FormCampaignComponent } from './form-campaign/form-campaign.component';
import { ListCampaignComponent } from './list-campaign/list-campaign.component';
const routes: Routes = [
  {
    path: '',
    component: ListCampaignComponent,
    title: 'Campaign'
  }
];

@NgModule({
  declarations: [
    ListCampaignComponent,
    FormCampaignComponent
  ],
  imports: [
    CommonModule,
    NzModalModule,
    NzInputModule,
    FormsModule,
    NzSelectModule,
    NzTimePickerModule,
    NzTagModule,
    NzTableModule,
    NzDatePickerModule,
    RouterModule.forChild(routes)
  ]
})
export class CampaignPageModule { }
