import { bindable } from "aurelia-framework";
import { Category } from "../../services/point-types";

export class CategoryList {
  @bindable
  categories: Category[];
}
