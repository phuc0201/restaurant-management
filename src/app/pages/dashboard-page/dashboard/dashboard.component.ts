import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SystemConstant } from 'src/app/core/constants/system.constant';
import { AddressSelected, LocationMarker } from 'src/app/core/models/common/location.mode';
import { IToken } from 'src/app/core/models/common/response-data.model';
import { IconMarker, RoleType } from 'src/app/core/utils/enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  token!: IToken;
  locationMarker = new LocationMarker();
  ngOnInit(): void {
    const resLocation = localStorage.getItem(SystemConstant.LOCATION);
    if (resLocation) {
      const location = JSON.parse(resLocation) as AddressSelected;
      this.locationMarker = new LocationMarker(RoleType.RESTAURANT, IconMarker.RESTAURANT, location.coordinates);
    }
  }

  constructor(
    private store: Store
  ) { }
}
