import { inject } from 'aurelia-framework';
import { PointService } from '../services/point-service';

@inject(PointService)
export class Logout {
  constructor(private ds: PointService) {}

  attached() {
    this.ds.logout();
  }
}
