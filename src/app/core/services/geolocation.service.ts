import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SystemConstant } from '../constants/system.constant';
import { AddressSelected } from '../models/common/location.mode';


@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  defaultLocation: AddressSelected = {
    address: 'Trường Đại học Sư phạm Kỹ thuật Tp.HCM',
    coordinates: [10.850663501572672, 106.77190584520183]
  };

  private locationBehavior;
  currLocation: Observable<AddressSelected>;

  constructor() {
    this.locationBehavior = new BehaviorSubject<AddressSelected>(this.defaultLocation);
    this.currLocation = this.locationBehavior.asObservable();
  }

  setLocation(location: AddressSelected) {
    this.locationBehavior.next(location);
    localStorage.setItem(
      SystemConstant.LOCATION,
      JSON.stringify({
        address: location.address ?? '',
        coordinates: location.coordinates
      }),
    );
  }
}
