import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Campaign } from 'src/app/core/models/campaign/campain.model';
import { Restaurant } from 'src/app/core/models/restaurant/restaurant.model';
import { CampaignService } from 'src/app/core/services/campaign.service';
import { FormatService } from 'src/app/core/services/common/format.serive';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { FormCampaignComponent } from '../form-campaign/form-campaign.component';

@Component({
  selector: 'app-list-campaign',
  templateUrl: './list-campaign.component.html',
  styleUrls: ['./list-campaign.component.scss']
})
export class ListCampaignComponent implements OnInit {
  restaurant = new Restaurant();
  campaigns: Campaign[] = [];
  campaignsForSearch: Campaign[] = [];
  isLoading: boolean = false;
  searchValue: string = '';

  normalizeString(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  search(name: string) {
    setTimeout(() => {
      this.campaignsForSearch = this.campaigns.filter(cp => this.normalizeString(cp.name.toLowerCase()).includes(this.normalizeString(name.toLowerCase())));
    }, 1000);
  }

  formatDate(isoDate: string): string {
    return this.formatSrv.formatDate(isoDate);
  }

  createCampaignModal(campaign: Campaign = new Campaign()): void {
    if (campaign.restaurant_id === '') {
      campaign.restaurant_id = this.restaurant._id;
    }

    const modal = this.modal.create<FormCampaignComponent, Campaign>({
      nzTitle: 'Campaign',
      nzContent: FormCampaignComponent,
      nzViewContainerRef: this.ViewContainerRef,
      nzData: campaign,
      nzFooter: null,
      nzWidth: '700px',
      nzWrapClassName: 'modal-campaign'
    });

    modal.afterClose.subscribe(result => {
      this.loadCampaigns();
    });
  }

  deleteCampaign(campaign_id: string) {
    this.campaignSrv.deleteCampaign(campaign_id).subscribe({
      complete: () => {
        this.loadCampaigns();
      }
    });
  }

  loadCampaigns(): void {
    this.isLoading = true;
    this.campaignSrv.getCampaigns(this.restaurant._id).subscribe({
      next: cmp => {
        this.campaigns = cmp;
        this.campaignsForSearch = cmp;
      },
      complete: () => {
        setTimeout(() => { this.isLoading = false; }, 500);
      }
    });
  }

  ngOnInit(): void {
    this.resSrv.getInfor().subscribe({
      next: infor => {
        this.restaurant = infor;
      },
      complete: () => {
        this.loadCampaigns();
      }
    });
  }

  constructor(
    private modal: NzModalService,
    private ViewContainerRef: ViewContainerRef,
    private resSrv: RestaurantService,
    private campaignSrv: CampaignService,
    private formatSrv: FormatService
  ) { }

}
