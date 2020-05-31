import { inject } from 'aurelia-framework';
import { bindable } from 'aurelia-framework';
import { Category } from '../../services/point-types';
import { PointService } from '../../services/point-service';

@inject(PointService)
export class ContributeForm {
  costalZone: string;
  @bindable categories: Category[];

  name = '';
  description = '';
  selectedCategory: Category = null;
  lat= 53.2734;
  long= -7.7783203;


  constructor(private ds: PointService) {}

  contribute() {
    this.ds.addPoint(this.name, this.description, this.selectedCategory, this.lat, this.long );
  }

  addCategory() {
    this.ds.createCategory(this.costalZone);
  }
}



