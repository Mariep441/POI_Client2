import { LeafletMap, LeafletMapDescriptor } from "./leaflet-map";
import { Point} from './point-types';
import * as L from "leaflet";
import Marker = L.Marker;


export interface PointSelect {
  onSelect(id: string): any;
}


export class CoastalLeafletMap extends LeafletMap {

  markerMap = new Map<Marker, Point>();
  constructor(descriptor: LeafletMapDescriptor) {
    super(descriptor);
  }


  populatePoint(points: Point[], link: boolean = true, pointSelect: PointSelect = null) {
    let group = L.layerGroup([]);
      points.forEach((point) => {
      let marker = L.marker([point.coordinates.lat, point.coordinates.long]);
      var newpopup = L.popup({ autoClose: false, closeOnClick: false });
      const popupTitle = link
        ? `<a href='/point/${point.name}'>${point.name} <small>(click for details}</small></a>`
        : point.name;
      newpopup.setContent(popupTitle);
      marker.bindPopup(newpopup);
      marker.addTo(group);
      if (pointSelect) {
        this.markerMap.set(marker, point);
        marker.addTo(group).on("popupopen", (event) => {
          const marker = event.popup._source;
          const shortPoint = this.markerMap.get(marker);
          pointSelect.onSelect(shortPoint.name);
        });
      }
    });
  }


}




