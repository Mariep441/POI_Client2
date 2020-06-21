import { Point } from './point-types';

export class TotalUpdate {
  total: number;
  point: Point;
  constructor(total: number, point: Point) {
    this.total = total;
    this.point = point;
  }
}
