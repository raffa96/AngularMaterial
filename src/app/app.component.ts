import { UserdataService } from './provider/userdata.service';
import { UserDevice } from './class/UserDevice';
import { Component, OnInit, Input } from '@angular/core';
import { latLng, tileLayer, marker, icon } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-material';

  @Input() device: UserDevice;

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
  markerMaps = marker(
    [46.8523, -121.7603],
    {
      icon: icon({
        iconSize: [90, 60],
        iconAnchor: [90, 60],
        iconUrl: 'leaflet/mano.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      })
    }
  );

  // oggetto controller per i layer
  layersControl = {
    baseLayers: {
      'Street Maps': this.streetMaps,
      'Wikimedia Maps': this.wMaps
    },
    overlays: {
      'Marker Maps': this.markerMaps
    }
  };

  // impostazioni dei layer per inizializzazione della mappa
  options = {
    layers: [this.streetMaps, this.markerMaps],
    zoom: 8,
    center: latLng([46.879966, -121.726909])
  };

  ngOnInit() {
  }
}
