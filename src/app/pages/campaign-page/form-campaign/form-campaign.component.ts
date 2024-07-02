import { Component, OnInit, inject } from '@angular/core';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { Campaign, CampaignDTO } from 'src/app/core/models/campaign/campain.model';
import { Restaurant } from 'src/app/core/models/restaurant/restaurant.model';
import { CampaignService } from 'src/app/core/services/campaign.service';

@Component({
  selector: 'app-form-campaign',
  templateUrl: './form-campaign.component.html',
  styleUrls: ['./form-campaign.component.scss']
})
export class FormCampaignComponent implements OnInit {
  #modal = inject(NzModalRef);
  campaignDetails: Campaign = inject(NZ_MODAL_DATA);
  campaignDTO = new CampaignDTO();
  restaurantInfo = new Restaurant();
  startTime = new Date();
  endTime = new Date();
  date: any[] = [];
  isUpdate: boolean = false;

  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }


  submitForm() {
    this.campaignDTO.conditions.start_time = this.date[0];
    this.campaignDTO.conditions.end_time = this.date[1];

    this.campaignDTO.conditions.start_time.setHours(this.startTime.getHours());
    this.campaignDTO.conditions.start_time.setMinutes(this.startTime.getMinutes());
    this.campaignDTO.conditions.start_time.setSeconds(0);

    this.campaignDTO.conditions.end_time.setHours(this.endTime.getHours());
    this.campaignDTO.conditions.end_time.setMinutes(this.endTime.getMinutes());
    this.campaignDTO.conditions.end_time.setSeconds(0);

    if (!this.isUpdate) {
      const { _id, ...dto } = this.campaignDTO;
      this.campaignSrv.createCampaign(dto).subscribe();
    }
    else {
      const { deleted_at, ...dto } = this.campaignDTO;
      this.campaignSrv.updateCampaign(dto).subscribe();
    }

    setTimeout(() => {
      this.#modal.close();
    }, 1000);
  }

  ngOnInit(): void {
    this.isUpdate = false;
    this.campaignDTO = this.campaignDetails;
    if (this.campaignDetails._id !== '') {
      this.isUpdate = true;
      this.date = [new Date(this.campaignDTO.conditions.start_time), new Date(this.campaignDTO.conditions.end_time)];
      this.startTime = new Date(this.campaignDTO.conditions.start_time);
      this.endTime = new Date(this.campaignDTO.conditions.end_time);
    }
  }

  constructor(
    private campaignSrv: CampaignService
  ) { }
}
