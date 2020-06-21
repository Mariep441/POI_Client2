import { inject } from 'aurelia-framework';
import { PointService } from '../services/point-service';

@inject(PointService)
export class Login {
  email = 'homer@simpson.com';
  password = 'secret';
  prompt = '';

  constructor(private ds: PointService) {}

  async login(e) {
    console.log(`Trying to log in ${this.email}`);
    const success = await this.ds.login(this.email, this.password);
    if (!success) {
      this.prompt = "Oops! Try again...";
    }
  }
}
