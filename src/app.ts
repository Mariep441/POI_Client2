import { PLATFORM } from 'aurelia-pal';
import { RouterConfiguration, Router } from 'aurelia-router';
import { PointService } from './services/point-service';

export class App {
  router: Router;
  title = "Point of Interest";
  constructor(private ds: PointService) {}

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = "Point of Interest";
    config.options.pushState = true;
    config.map([
      { route: [""],
        name: 'map',
        moduleId: PLATFORM.moduleName('views/map'),
        nav: true,
        title: 'Map'
      },
      {
        route: 'list',
        moduleId: PLATFORM.moduleName('views/point-list'),
        name: "point-list",
        nav: true,
        title: "List of all Points of Interest",
      },
      {
        route: 'contribute',
        name: 'Contribute',
        moduleId: PLATFORM.moduleName('views/contribute'),
        nav: true,
        title: 'Add a Point of Interest'
      },
      {
        route: 'logout',
        name: 'logout',
        moduleId: PLATFORM.moduleName('views/logout'),
        nav: true,
        title: 'Logout'
      },
      {
        route: "navigator",
        moduleId: PLATFORM.moduleName('views/navigator'),
        name: "navigator",
        title: 'Navigator',
      },
      {
        route:  'points/:id',
        moduleId: PLATFORM.moduleName('views/point-detail'),
        name: 'points',
        title: 'Island',
      },

    ]);
    this.router = router;
  }
}
