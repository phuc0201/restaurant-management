import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AddressSelected } from './core/models/common/location.mode';
import { GeolocationService } from './core/services/geolocation.service';
import { RestaurantService } from './core/services/restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'restaurant-management';

  constructor(
    private restaurantSrv: RestaurantService,
    private geoSrv: GeolocationService
  ) { }

  ngOnInit(): void {
    initFlowbite();

    const resObserve = this.restaurantSrv.getInfor().subscribe({
      next: data => {
        const location = new AddressSelected();
        location.address = data.address;
        location.coordinates = [data.location.coordinates[1], data.location.coordinates[0]];
        this.geoSrv.setLocation(location);
      },
      complete: () => {
        resObserve.unsubscribe();
      }
    });

  }
}
