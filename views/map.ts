import { CoastalLeafletMap } from '../services/coastal-leaflet-map';
import { PointService } from '../services/point-service';
import { inject } from 'aurelia-framework';
import { Category, Point } from '../services/point-types';
import * as L from "leaflet";


@inject(PointService)
export class Map {
  mapDescriptor = {
    id: "home-map-id",
    height: 1200,
    location: { lat: 53.2734, long: -7.7783203 },
    zoom: 8,
    minZoom: 7,
    activeLayer: "",
  };

  map: CoastalLeafletMap;
  points: Point[];

  constructor(private ds: PointService) {}


  async activate(params: any) {
    this.points = await this.ds.getPoints();
  }

  renderPoints(points) {
    for (let point of this.ds.points) {
      const pointStr = `<a href='/points/${point._id}'> ${point.category.costalZone}${point.name}</a>`
      this.map.addMarker(point.coordinates, pointStr, 'Points');
    }
  }

  attached() {
    this.map = new CoastalLeafletMap(this.mapDescriptor);
    if (this.points) {
      this.renderPoints(this.points);
    }
  }
}
