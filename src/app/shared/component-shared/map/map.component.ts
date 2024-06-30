import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';
const plugins = [
  CommonModule,
  LeafletModule
];
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  standalone: true,
  imports: plugins
})
export class MapComponent implements AfterViewInit {
  map!: L.Map;
  currMarker!: L.Marker;
  pinIcon = L.icon({
    iconUrl: 'assets/img/icons/restaurant-location.png',
    iconSize: [60, 60]
  });


  initMap(): void {
    this.map = L.map('map', {
      center: [10.851402157771068, 106.76597508608624] as L.LatLngExpression,
      zoom: 2
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 2,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    L.marker([10.851402157771068, 106.76597508608624] as L.LatLngExpression, { icon: this.pinIcon }).addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
