import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      {
        route: 'map',
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
        route: ['', 'contribute'],
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
        route: "point/:id",
        moduleId: PLATFORM.moduleName('views/point-detail'),
        name: "points",
        title: "Island",
      },

    ]);
    this.router = router;
  }
}
