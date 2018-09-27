import { UserdataService } from './provider/userdata.service';
import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, marker, icon, Marker } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-material';

  markers: Marker[] = [];

  constructor(private service: UserdataService) { }

  // definizione dei layer di base per la mappa
  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  // oggetto controller per i layer
  layersControl = {
    baseLayers: {
      'Street Maps': this.streetMaps,
      'Wikimedia Maps': this.wMaps
    }
  };
  // impostazioni dei layer per inizializzazione della mappa
  options = {
    layers: [this.streetMaps],
    zoom: 8,
    center: latLng([46.879966, -121.726909])
  };

  createIcon() {
    return icon({
      iconSize: [90, 60],
      iconAnchor: [90, 60],
      iconUrl: 'leaflet/mano.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    });
  }

  ngOnInit() {
    this.service.getDevices().subscribe(data => {
      data.map(k => {
        const id = k.id;
        const name = k.name;
        const lat = k.lat;
        const lng = k.lng;

        const markerMaps = marker(
          [lat, lng],
          { icon: this.createIcon() }
        );
        markerMaps.bindPopup('<p>' + id + '</p>', { autoPan: true });
        markerMaps.bindPopup('<p>' + name + '</p>', { autoPan: true });
        this.markers.push(markerMaps);

        // console.log('working', typeof (this.markers));
      });
    });
  }
}
