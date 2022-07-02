import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  private map: L.Map | undefined;
  private centroid: L.LatLngExpression;
  constructor(private locationService: LocationService) {
    // this.centroid = [26.9272316, 80.8832688]; // IIM Lucknow
    this.centroid = [42.3601, -71.0589]; // IIM Lucknow
    this.map = undefined;
  }

  private initMap = (): void => {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12,
      zoomControl: false,
    });
    this.fixMarker();

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 10,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    L.marker(this.centroid).addTo(this.map);

    // const jittery = Array(5)
    //   .fill(this.centroid)
    //   .map((x) => [
    //     x[0] + (Math.random() - 0.5) / 10,
    //     x[1] + (Math.random() - 0.5) / 10,
    //   ])
    //   .map((x) => L.marker(x as L.LatLngExpression))
    //   .forEach((x) => x.addTo(this.map as any));

    tiles.addTo(this.map);

    L.control
      .zoom({
        position: 'bottomright',
      })
      .addTo(this.map);
  };

  private fixMarker = (): void => {
    const iconRetinaUrl = 'assets/marker-icon-2x.png';
    const iconUrl = 'assets/marker-icon.png';
    const shadowUrl = 'assets/marker-shadow.png';
    const iconDefault = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41],
    });
    L.Marker.prototype.options.icon = iconDefault;
  };

  private showPosition = (position: GeolocationPosition): void => {
    this.centroid = [position.coords.latitude, position.coords.longitude];
    this.initMap();
  };

  private showError = (error: GeolocationPositionError): void => {
    this.centroid = [17.4290534, 78.3412454];
    this.initMap();
  };

  ngOnInit(): void {
    this.locationService.getLocation(this.showPosition, this.showError);
  }
}
