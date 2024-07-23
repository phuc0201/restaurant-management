import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemConstant } from 'src/app/core/constants/system.constant';
import { AddressSelected, LocationMarker } from 'src/app/core/models/common/location.mode';
import { OrderDetails } from 'src/app/core/models/order/order.model';

import { FormatService } from 'src/app/core/services/common/format.serive';
import { OrderService } from 'src/app/core/services/order.service';
import { IconMarker, RoleType } from 'src/app/core/utils/enum';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  data: any;
  orderDetails = new OrderDetails();
  coords: number[] = [0, 0];
  locationMarkers: LocationMarker[] = [];
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;

    const observe = this.orderService.getOrderDetails(id).subscribe({
      next: data => {
        this.orderDetails = data;
        this.coords = data.delivery_location.coordinates.reverse();
      },
      complete: () => {
        this.setLocationMarker();
        this.cdRef.detectChanges();
        observe.unsubscribe();
      }
    });
  }

  setLocationMarker() {
    const resLocation = localStorage.getItem(SystemConstant.LOCATION);
    let resMarker = new LocationMarker();
    if (resLocation) {
      const location = JSON.parse(resLocation) as AddressSelected;
      const restaurantMarker = new LocationMarker(RoleType.RESTAURANT, IconMarker.RESTAURANT, location.coordinates);
      resMarker = restaurantMarker;
    }
    const customerMarker = new LocationMarker(RoleType.CUSTOMER, IconMarker.CUSTOMER, this.coords);
    if (resMarker.coordinates.length > 0) {
      this.locationMarkers = [...[customerMarker], ...[resMarker]];
    }


  }

  formatDate(date: Date) {
    if (date !== null) {
      return this.formatService.formatDate(date.toString());
    }
    return 'null';
  }

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private formatService: FormatService,
    private cdRef: ChangeDetectorRef
  ) { }
}
