import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'sb-properties-map',
  templateUrl: './properties-map.component.html',
  styleUrls: ['./properties-map.component.scss'],
})
export class PropertiesMapComponent implements OnInit, AfterViewInit {
  private map;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initMap();
  }
  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 1,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );
    L.marker([50.5, 30.5]).addTo(this.map);

    tiles.addTo(this.map);
  }
}
