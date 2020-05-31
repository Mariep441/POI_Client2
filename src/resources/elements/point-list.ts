import { bindable } from 'aurelia-framework';
import { Point } from '../../services/point-types';
import { Category } from '../../services/point-types';

export class PointList {
  @bindable
  points: Point[];
  categories: Category[];
}
