import { bindable } from 'aurelia-framework';
import { Coordinates } from '../../services/point-types';

export class Location {
  @bindable coordinates: Coordinates;
}
