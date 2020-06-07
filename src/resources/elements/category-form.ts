import { inject } from 'aurelia-framework';
import { bindable } from 'aurelia-framework';
import { Category } from '../../services/point-types';
import { PointService } from '../../services/point-service';

@inject(PointService)
export class CategoryForm {
  costalZone: string;
  @bindable categories: Category[];

  constructor(private ds: PointService) {}

  addCCategory() {
    this.ds.createCategory(this.costalZone);
  }
}
