import { PointService } from '../../services/point-service';
import { autoinject } from "aurelia-framework";
import { Category } from "../../services/point-types";

@autoinject
export class CategoriesSidebar {
  categories: Array<Category>;

  constructor(private ds: PointService) {
    this.loadCategories();
  }

  async loadCategories() {
    this.categories = await this.ds.getCategories2();
  }
}
