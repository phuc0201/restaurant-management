import { CampaignDiscountType, CampaignScopeType, CampaignUserGroup, CurrencyCode } from "../../utils/enum";


export class CampaignSelected {
  _id: string = '';
  discount_value: number = 0;
}


class CampaignScope {
  type: CampaignScopeType = CampaignScopeType.ORDER;
  object_ids: string[] = [];
}

class CampaignQuotas {
  limit: number = 0;
  total_count_per_count: number = 0;
}

class CampaignDiscount {
  type: CampaignDiscountType = CampaignDiscountType.NET;
  cap?: number;
  value: number = 0;
  scope = new CampaignScope();
}

class CampaignConditions {
  start_time: Date = new Date();
  end_time: Date = new Date();
  user_group: CampaignUserGroup = CampaignUserGroup.ALL_CUSTOMER;
  minBasketAmount: number = 0;
}

export class Campaign {
  _id: string = '';
  restaurant_id: string = '';
  name: string = '';
  description: string = '';
  conditions: CampaignConditions = new CampaignConditions();
  discount: CampaignDiscount = new CampaignDiscount();
  quotas: CampaignQuotas = new CampaignQuotas();
  unavailable_users: string[] = [];
  currency_code: CurrencyCode = CurrencyCode.VND;
  image: string = 'https://media.be.com.vn/bizops/image/aacff7f7-52cd-11ee-b2af-3ea2e1c5510b/original';
}

export class CampaignDTO {
  _id?: string;
  restaurant_id: string = '';
  name: string = '';
  description: string = '';
  conditions: CampaignConditions = new CampaignConditions();
  discount: CampaignDiscount = new CampaignDiscount();
  quotas: CampaignQuotas = new CampaignQuotas();
  unavailable_users: string[] = [];
  currency_code: CurrencyCode = CurrencyCode.VND;
  image: string = 'https://media.be.com.vn/bizops/image/aacff7f7-52cd-11ee-b2af-3ea2e1c5510b/original';
  deleted_at?: Date;
}
