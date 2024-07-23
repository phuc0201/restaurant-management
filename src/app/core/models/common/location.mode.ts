import { RoleType } from "../../utils/enum";

export class Location {
  type: string = 'Point';
  coordinates: number[] = [];
  address: string = '';
}

export class AddressSelected {
  address: string = '';
  coordinates: number[] = [];
}

export class LocationMarker {
  type: RoleType = RoleType.CUSTOMER;
  iconUrl: string = '';
  coordinates: number[] = [];
  marker: any;
  constructor(type: RoleType = RoleType.CUSTOMER, iconUrl: string = '', coordinates: number[] = []) {
    this.type = type;
    this.iconUrl = iconUrl;
    this.coordinates = coordinates;
  }
}
