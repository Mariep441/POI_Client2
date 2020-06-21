import { inject, Aurelia } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';
import { Category, Point} from './point-types';
import { HttpClient } from 'aurelia-http-client';
import { EventAggregator } from 'aurelia-event-aggregator';


@inject(HttpClient, EventAggregator, Aurelia, Router)
export class PointService {
  categories: Category[] = [];
  points: Point[] = [];
  islandMap = new Map<string, Point>();
  coastMap = new Map<string, Category>();

  constructor(private httpClient: HttpClient, private ea: EventAggregator, private au: Aurelia, private router: Router) {
    httpClient.configure((http) => {
      http.withBaseUrl('https://mariep441-entreprise-web-dev-2.glitch.me');
    });
  }


  async getPoints() {
    const response = await this.httpClient.get('/api/points');
    this.points = await response.content;
    return this.points;
  }

  async getPointById(id: string) {
    const response = await this.httpClient.get('/api/points/' + id);
    this.points = await response.content;
    return this.points;
  }



  async getCategories() {
    const response = await this.httpClient.get('/api/categories');
    this.categories = await response.content;
    console.log(this.categories);
  }

 async getCategories2() {
  if (!this.categories) {
       const response = await this.httpClient.get('/api/categories');
       this.categories = await response.content;
      this.createIndexes();
   }
  return this.categories;
 }

  createIndexes() {
    this.categories.forEach((category) => {
      this.coastMap.set(category.costalZone, category);
      this.points.forEach((point) => {
        point.category = category;
        this.islandMap.set(point.name, point);
      });
    });
  }


  async createCategory(costalZone: string) {
    const category = {
      costalZone: costalZone,
    };
    const response = await this.httpClient.post('/api/categories', category);
    const newCategory = await response.content;
    this.categories.push(newCategory);
  }



  async addPoint(name: string, description: string, category: Category, lat: number, long:number) {
    let success = false;
    try {
      const point = {
        name: name,
        description: description,
        category: category,
        coordinates: {
          lat: lat,
          long: long,
        },
      };
      const response = await this.httpClient.post('/api/categories/' + category._id + '/points', point);
      const newPoint = await response.content;
      this.points.push(newPoint);
      this.ea.publish(point);

    } catch (e) {
      success = false;
    }
    this.changeRouter(PLATFORM.moduleName('app'));
    return success;
  }


  async signup(firstName: string, lastName: string, email: string, password: string) {
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    const response = await this.httpClient.post('/api/users', user);
    const newUser = await response.content;
    this.changeRouter(PLATFORM.moduleName('app'));
    return false;
  }

  async login(email: string, password: string) {
    let success = false;
    try {
      const response = await this.httpClient.post('/api/users/authenticate', { email: email, password: password });
      const status = await response.content;
      if (status.success) {
        this.httpClient.configure((configuration) => {
          configuration.withHeader('Authorization', 'bearer ' + status.token);
        });
        localStorage.donation = JSON.stringify(response.content);
        await this.getCategories();
        await this.getPoints();
        this.changeRouter(PLATFORM.moduleName('app'));
        success = status.success;
      }
    } catch (e) {
      success = false;
    }
    return success;
  }

  logout() {
    localStorage.point = null;
    this.httpClient.configure((configuration) => {
      configuration.withHeader('Authorization', '');
    });
    this.changeRouter(PLATFORM.moduleName('start'));
  }

  checkIsAuthenticated() {
    let authenticated = false;
    if (localStorage.donation !== 'null') {
      authenticated = true;
      this.httpClient.configure((http) => {
        const auth = JSON.parse(localStorage.point);
        http.withHeader('Authorization', 'bearer ' + auth.token);
      });
      this.changeRouter(PLATFORM.moduleName('app'));
    }
  }

  changeRouter(module: string) {
    this.router.navigate('/', { replace: true, trigger: false });
    this.router.reset();
    this.au.setRoot(PLATFORM.moduleName(module));
  }
}
