import * as L from 'leaflet';
import Map = L.Map;
import Layer = L.Layer;
import LayersObject = L.Control.LayersObject;
import LayerGroup = L.LayerGroup;
import LayerControl = L.Control.Layers;
import {Coordinates} from './point-types';


export interface LeafletMapDescriptor {
  id: string;
  height: number;
  location: Coordinates;
  zoom: number;
  minZoom: number;
  activeLayer: string;
}

export class LeafletMap {
  imap: Map;
  control: LayerControl;
  overlays: LayersObject = {};


  baseLayers = {
    Terrain: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution:
        'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    }),
    Satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution:
        'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    }),
  };

  constructor(descriptor: LeafletMapDescriptor) {
    let defaultLayer = this.baseLayers.Terrain;
    if (descriptor.activeLayer) {
      defaultLayer = this.baseLayers[descriptor.activeLayer];
    }
    this.imap = L.map(descriptor.id, {
      center: [descriptor.location.lat, descriptor.location.long],
      zoom: descriptor.zoom,
      minZoom: descriptor.minZoom,
      layers: [defaultLayer],
    });
    this.addControl();
  }

  addControl() {
    this.control = L.control.layers(this.baseLayers, this.overlays).addTo(this.imap);
  }


  addLayer(title: string, layer: Layer) {
    this.overlays[title] = layer;
    this.imap.addLayer(layer);
  }

  addLayerGroup(title: string) {
    this.overlays[title] = L.layerGroup([]);
    this.imap.addLayer(this.overlays[title]);
  }

  showLayerControl() {
    this.control = L.control.layers(this.baseLayers, this.overlays).addTo(this.imap);
  }

  showZoomControl(position = 'topleft') {
    L.control
      .zoom({
        position: position,
      })
      .addTo(this.imap);
  }

  moveTo(zoom: number, location: Coordinates) {
    this.imap.setZoom(zoom);
    this.imap.panTo(new L.LatLng(location.lat, location.long));
  }

  zoomTo(location: Coordinates) {
    this.imap.setView(new L.LatLng(location.lat, location.long), 8);
  }

  addMarker(location: Coordinates, popupText = '', layerTitle = 'default') {
    let group: LayerGroup;
    let marker = L.marker([location.lat, location.long]);
    if (popupText) {
      var popup = L.popup({ autoClose: false, closeOnClick: false });
      popup.setContent(popupText);
      marker.bindPopup(popup);
    }
    if (!this.overlays[layerTitle]) {
      group = L.layerGroup([]);
      this.overlays[layerTitle] = group;
      this.imap.addLayer(group);
    } else {
      group = this.overlays[layerTitle] as LayerGroup;
    }
    marker.addTo(group);
  }

  addPopup(layerTitle: string, content: string, location: Coordinates) {
    let popupGroup: LayerGroup;
    if (!this.overlays[layerTitle]) {
      popupGroup = L.layerGroup([]);
      this.overlays[layerTitle] = popupGroup;
      this.imap.addLayer(popupGroup);
    } else {
      popupGroup = this.overlays[layerTitle] as LayerGroup;
    }
    const popup = L.popup({
      closeOnClick: false,
      closeButton: false,
    })
      .setLatLng({ lat: location.lat, long: location.long })
      .setContent(content);
    popup.addTo(popupGroup);
  }



  invalidateSize() {
    this.imap.invalidateSize();
    let hiddenMethodMap = this.imap as any;
    hiddenMethodMap._onResize();
  }
}
