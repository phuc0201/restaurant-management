import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLConstant } from '../constants/url.constant';
import { Campaign, CampaignDTO } from '../models/campaign/campain.model';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  baseURL = URLConstant.API.END_POINT;

  constructor(
    private http: HttpClient
  ) { }

  createCampaign(dto: CampaignDTO): Observable<Campaign> {
    return this.http.post<Campaign>(this.baseURL + '/restaurant/campaign/create', dto);
  }

  getCampaigns(id: string): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.baseURL + `/restaurant/${id}/campaigns`);
  }

  updateCampaign(dto: CampaignDTO): Observable<Campaign> {
    return this.http.patch<Campaign>(this.baseURL + '/restaurant/campaign/update', dto);
  }

  deleteCampaign(campaign_id: string) {
    return this.http.delete(this.baseURL + `/restaurant/campaign/${campaign_id}/delete`);
  }
}
