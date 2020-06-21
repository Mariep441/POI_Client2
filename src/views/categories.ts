import { inject } from 'aurelia-framework';
import { Category } from '../services/point-types';
import { PointService } from '../services/point-service';

@inject(PointService)
export class Categories {
  categories: Category[];

  constructor(private ds: PointService) {
    this.categories = ds.categories;
  }
}
