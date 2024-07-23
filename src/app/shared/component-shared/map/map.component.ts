import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { LocationMarker } from 'src/app/core/models/common/location.mode';
import { RoleType } from 'src/app/core/utils/enum';
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
export class MapComponent implements AfterViewInit, OnInit, OnDestroy, OnChanges {
  @Input() zoomValue: number = 15;
  @Input() locationMarkers: LocationMarker[] = [];
  location: number[] = [10.851402157771068, 106.76597508608624];
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
  routingControl!: L.Routing.Control;
  map!: L.Map;
  currMarker!: L.Marker;
  pinIcon = L.icon({
    iconUrl: "assets/img/icons/pin-map.png",
    iconSize: [60, 60]
  });


  initMap(): void {
    if (this.map) {
      this.map.remove();
    }

    this.map = L.map(this.mapContainer.nativeElement, {
      center: this.location as L.LatLngExpression,
      zoom: this.zoomValue
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 2,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    this.handleTracking();
  }

  handleTracking(): void {
    const waypoints = this.locationMarkers.map(location => {
      const icon = L.icon({
        iconUrl: location.iconUrl,
        iconSize: [50, 50]
      });
      const marker = L.marker(location.coordinates as L.LatLngExpression, { icon: icon }).addTo(this.map);
      location.marker = marker;
      return marker;
    });

    const routingControl = L.Routing.control({
      waypoints: waypoints.map(marker => marker.getLatLng()),
      routeWhileDragging: true,
      createMarker: () => null,
      show: false,
      collapsible: true
    } as any).on('routesfound', (e: any) => {
      // Handle routes found event
    });

    if (this.routingControl) {
      this.map.removeControl(this.routingControl);
    }
    this.routingControl = routingControl;

    this.routingControl.addTo(this.map);


    if (this.locationMarkers.length > 0) {
      this.locationMarkers.forEach(location => {
        if (location.type == RoleType.RESTAURANT) {
          this.map = L.map(this.mapContainer.nativeElement).setView(location.coordinates as L.LatLngExpression, this.zoomValue);
        }
      });
    }
  }


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['locationMarkers'] && !changes['locationMarkers'].firstChange) {
      this.handleTracking();
    }
  }


  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }
}
