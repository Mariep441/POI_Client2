import { inject } from 'aurelia-framework';
import { Category, Point } from '../services/point-types';
import { PointService } from '../services/point-service';

@inject(PointService)
export class Contribute {
  points: Point[];
  categories: Category[];


  constructor(private ds: PointService) {
    this.categories = ds.categories;
    this.points = ds.points;
  }
}
