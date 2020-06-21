(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(t,e,n){n("GAND"),n("GmYv"),t.exports=n("b9nV")},BEPO:function(t){t.exports=JSON.parse('{"a":false,"b":false}')},app:function(t,e,n){"use strict";n.r(e),n.d(e,"App",(function(){return i}));n("70NS");var i=function(){function t(t){this.ds=t,this.title="Point of Interest"}return t.prototype.configureRouter=function(t,e){t.title="Point of Interest",t.options.pushState=!0,t.map([{route:[""],name:"map",moduleId:"views/map",nav:!0,title:"Map"},{route:"list",moduleId:"views/point-list",name:"point-list",nav:!0,title:"List of all Points of Interest"},{route:"contribute",name:"Contribute",moduleId:"views/contribute",nav:!0,title:"Add a Point of Interest"},{route:"logout",name:"logout",moduleId:"views/logout",nav:!0,title:"Logout"},{route:"navigator",moduleId:"views/navigator",name:"navigator",title:"Navigator"},{route:"points/:id",moduleId:"views/point-detail",name:"points",title:"Island"}]),this.router=e},t}()},"app.html":function(t,e,n){t.exports='<template>\n  <require from="resources/elements/nav-bar.html"></require>\n\n  <div class="ui container">\n    <section class="ui raised segment">\n      <h3 class="ui header green"> Points of Interest - The islands of Ireland </h3>\n    </section>\n    <nav-bar router.bind="router"></nav-bar>\n    <div class="ui basic segment">\n      <router-view></router-view>\n    </div>\n  </div>\n</template>\n'},main:function(t,e,n){"use strict";n.d(e,"configure",(function(){return o}));var i=n("BEPO");n("70NS");function o(t){return t.use.standardConfiguration().plugin("aurelia-fontawesome").feature("resources/index"),t.use.developmentLogging(i.a?"debug":"warn"),i.b&&t.use.plugin("aurelia-testing"),t.start().then((function(){return t.setRoot("start")}))}},"resources/elements/contribute-form":function(t,e,n){"use strict";n.r(e),n.d(e,"ContributeForm",(function(){return s}));var i=n("aurelia-framework"),o=n("rkiC"),r=function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.ds=t,this.name="",this.description="",this.selectedCategory=null,this.lat=53.2734,this.long=-7.7783203}return t.prototype.contribute=function(){this.ds.addPoint(this.name,this.description,this.selectedCategory,this.lat,this.long)},t.prototype.addCategory=function(){this.ds.createCategory(this.costalZone)},r([i.h,a("design:type",Array)],t.prototype,"categories",void 0),t=r([Object(i.j)(o.a),a("design:paramtypes",[o.a])],t)}()},"resources/elements/contribute-form.html":function(t,e,n){t.exports='<template>\n  <require from="./location"></require>\n\n\n  <form submit.trigger="contribute()" class="ui form stacked segment">\n    <h4 class=\'ui dividing header\'> Add a Point of Interest </h4>\n    <div class="field"><label>Name</label> <input value.bind="name"></div>\n    <div class="field"><label>Description</label> <input value.bind="description"></div>\n\n    <location coordinates.two-way="coordinates"></location>\n\n\n    <h4 class="ui dividing header"> Select Category </h4>\n      <div class="field" repeat.for="category of categories">\n        <div class="ui radio checkbox">\n          <input type="radio" model.bind="category" checked.bind="selectedCategory">\n          <label>${category.costalZone}</label>\n        </div>\n      </div>\n    <h4 class="ui dividing header"> Add a new Category </h4>\n    <form submit.trigger="addCategory()" class="ui form stacked segment">\n      <div class="field"><label>Costal Zone</label> <input value.bind="costalZone" /></div>\n      <button class="ui blue submit button">Add a Category</button>\n    </form>\n\n\n    <button class="ui blue submit button">Add a POI</button>\n  </form>\n</template>\n'},"resources/elements/location":function(t,e,n){"use strict";n.r(e),n.d(e,"Location",(function(){return a}));var i=n("aurelia-framework"),o=function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return o([i.h,r("design:type",Object)],t.prototype,"coordinates",void 0),t}()},"resources/elements/location.html":function(t,e){t.exports='<template>\n  <h4 class="ui dividing header"> Enter Coordinates </h4>\n  <div class="two fields">\n    <div class="field">\n      <label>Latitude</label> <input placeholder="00.000000" value.bind="coordinates.lat"/>\n    </div>\n    <div class="field">\n      <label>Longitude</label> <input placeholder="00.000000" value.bind="coordinates.long"/>\n    </div>\n  </div>\n</template>\n\n'},"resources/elements/nav-bar.html":function(t,e){t.exports='<template bindable="router">\n  <nav class="ui inverted menu">\n    <div class="right menu">\n      <div repeat.for="row of router.navigation">\n        <a class="${row.isActive ? \'active\' : \'\'} item"  href.bind="row.href">${row.title}</a>\n      </div>\n    </div>\n  </nav>\n</template>\n'},"resources/elements/point-description.html":function(t,e){t.exports='<template bindable="point">\n  <div class="ui segment">\n    <div class="description">\n      <p innerhtml.bind="point.description"> ${point.description}</p>\n    </div>\n  </div>\n</template>\n'},"resources/elements/point-lat-long.html":function(t,e){t.exports='<template bindable="point">\n  <div class="uk-card uk-card-default uk-card-body uk-padding-small">\n    <caption>GPS-compatible</caption>\n    <table class="uk-table uk-table-divider uk-table-small">\n      <tbody>\n      <tr>\n        <td>Latitude</td>\n        <td>${point.coordinates.lat}</td>\n      </tr>\n      <tr>\n        <td>Longitude</td>\n        <td>${point.coordinates.long}</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n  </div>\n</template>\n'},"resources/elements/point-list":function(t,e,n){"use strict";n.r(e),n.d(e,"PointList",(function(){return a}));var i=n("aurelia-framework"),o=function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return o([i.h,r("design:type",Array)],t.prototype,"points",void 0),t}()},"resources/elements/point-list.html":function(t,e){t.exports='<template>\n  <div class="ui stacked segment">\n    <h3 class="ui dividing header"> Points to Date </h3>\n    <table class="ui celled table segment">\n      <tr repeat.for="category of categories ">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Description</th>\n          <th>Location</th>\n          <th>Category</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr repeat.for="point of points">\n          <td> ${point.name}</td>\n          <td> ${point.description}</td>\n          <td> ${point.coordinates.lat},${point.coordinates.long}</td>\n          <td> ${point.category.costalZone}</td>\n        </tr>\n      </tbody>\n      </tr>\n    </table>\n  </div>\n</template>\n'},"resources/index":function(t,e,n){"use strict";function i(t){}n.r(e),n.d(e,"configure",(function(){return i}))},rkiC:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i=n("aurelia-framework"),o=n("4ysu"),r=n("70NS"),a=n("1aCK"),s=n("aurelia-event-aggregator"),c=function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},l=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{c(i.next(t))}catch(t){r(t)}}function s(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((i=i.apply(t,e||[])).next())}))},p=function(t,e){var n,i,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){a.label=r[1];break}if(6===r[0]&&a.label<o[1]){a.label=o[1],o=r;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(r);break}o[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},d=function(){function t(t,e,n,i){this.httpClient=t,this.ea=e,this.au=n,this.router=i,this.categories=[],this.points=[],this.islandMap=new Map,this.coastMap=new Map,t.configure((function(t){t.withBaseUrl("https://mariep441-entreprise-web-dev-2.glitch.me/")}))}return t.prototype.getPoints=function(){return u(this,void 0,void 0,(function(){var t,e;return p(this,(function(n){switch(n.label){case 0:return[4,this.httpClient.get("/api/points")];case 1:return t=n.sent(),e=this,[4,t.content];case 2:return e.points=n.sent(),[2,this.points]}}))}))},t.prototype.getPointById=function(t){return u(this,void 0,void 0,(function(){var e,n;return p(this,(function(i){switch(i.label){case 0:return[4,this.httpClient.get("/api/points/"+t)];case 1:return e=i.sent(),n=this,[4,e.content];case 2:return n.points=i.sent(),[2,this.points]}}))}))},t.prototype.getCategories=function(){return u(this,void 0,void 0,(function(){var t,e;return p(this,(function(n){switch(n.label){case 0:return[4,this.httpClient.get("/api/categories")];case 1:return t=n.sent(),e=this,[4,t.content];case 2:return e.categories=n.sent(),console.log(this.categories),[2]}}))}))},t.prototype.getCategories2=function(){return u(this,void 0,void 0,(function(){var t,e;return p(this,(function(n){switch(n.label){case 0:return this.categories?[3,3]:[4,this.httpClient.get("/api/categories")];case 1:return t=n.sent(),e=this,[4,t.content];case 2:e.categories=n.sent(),this.createIndexes(),n.label=3;case 3:return[2,this.categories]}}))}))},t.prototype.createIndexes=function(){var t=this;this.categories.forEach((function(e){t.coastMap.set(e.costalZone,e),t.points.forEach((function(n){n.category=e,t.islandMap.set(n.name,n)}))}))},t.prototype.createCategory=function(t){return u(this,void 0,void 0,(function(){var e,n;return p(this,(function(i){switch(i.label){case 0:return e={costalZone:t},[4,this.httpClient.post("/api/categories",e)];case 1:return[4,i.sent().content];case 2:return n=i.sent(),this.categories.push(n),[2]}}))}))},t.prototype.addPoint=function(t,e,n,i,o){return u(this,void 0,void 0,(function(){var r,a,s;return p(this,(function(c){switch(c.label){case 0:r=!1,c.label=1;case 1:return c.trys.push([1,4,,5]),a={name:t,description:e,category:n,coordinates:{lat:i,long:o}},[4,this.httpClient.post("/api/categories/"+n._id+"/points",a)];case 2:return[4,c.sent().content];case 3:return s=c.sent(),this.points.push(s),this.ea.publish(a),[3,5];case 4:return c.sent(),r=!1,[3,5];case 5:return this.changeRouter("app"),[2,r]}}))}))},t.prototype.signup=function(t,e,n,i){return u(this,void 0,void 0,(function(){var o;return p(this,(function(r){switch(r.label){case 0:return o={firstName:t,lastName:e,email:n,password:i},[4,this.httpClient.post("/api/users",o)];case 1:return[4,r.sent().content];case 2:return r.sent(),this.changeRouter("app"),[2,!1]}}))}))},t.prototype.login=function(t,e){return u(this,void 0,void 0,(function(){var n,i,o;return p(this,(function(r){switch(r.label){case 0:n=!1,r.label=1;case 1:return r.trys.push([1,7,,8]),[4,this.httpClient.post("/api/users/authenticate",{email:t,password:e})];case 2:return[4,(i=r.sent()).content];case 3:return(o=r.sent()).success?(this.httpClient.configure((function(t){t.withHeader("Authorization","bearer "+o.token)})),localStorage.donation=JSON.stringify(i.content),[4,this.getCategories()]):[3,6];case 4:return r.sent(),[4,this.getPoints()];case 5:r.sent(),this.changeRouter("app"),n=o.success,r.label=6;case 6:return[3,8];case 7:return r.sent(),n=!1,[3,8];case 8:return[2,n]}}))}))},t.prototype.logout=function(){localStorage.point=null,this.httpClient.configure((function(t){t.withHeader("Authorization","")})),this.changeRouter("start")},t.prototype.checkIsAuthenticated=function(){"null"!==localStorage.donation&&(!0,this.httpClient.configure((function(t){var e=JSON.parse(localStorage.point);t.withHeader("Authorization","bearer "+e.token)})),this.changeRouter("app"))},t.prototype.changeRouter=function(t){this.router.navigate("/",{replace:!0,trigger:!1}),this.router.reset(),this.au.setRoot(r.d.moduleName(t))},t=c([Object(i.j)(a.a,s.a,i.Aurelia,o.c),l("design:paramtypes",[a.a,s.a,i.Aurelia,o.c])],t)}()},start:function(t,e,n){"use strict";n.r(e),n.d(e,"Start",(function(){return s}));var i=n("aurelia-framework"),o=(n("70NS"),n("rkiC")),r=function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.ds=t}return t.prototype.configureRouter=function(t,e){t.map([{route:["","login"],name:"Login",moduleId:"views/login",nav:!0,title:"Login"},{route:"signup",name:"signup",moduleId:"views/signup",nav:!0,title:"Signup"}]),this.router=e},t.prototype.attached=function(){this.ds.checkIsAuthenticated()},t=r([Object(i.j)(o.a),a("design:paramtypes",[o.a])],t)}()},"start.html":function(t,e,n){t.exports='<template>\n  <require from="resources/elements/nav-bar.html"></require>\n  <div class="ui container">\n    <section class="ui raised segment">\n      <h3 class="ui header green"> Points of Interest - The islands of Ireland </h3>\n    </section>\n    <nav-bar router.bind="router"></nav-bar>\n    <div class="ui basic segment">\n      <router-view></router-view>\n    </div>\n  </div>\n</template>\n'},"views/contribute":function(t,e,n){"use strict";n.r(e),n.d(e,"Contribute",(function(){return s}));var i=n("aurelia-framework"),o=n("rkiC"),r=function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.ds=t,this.categories=t.categories,this.points=t.points}return t=r([Object(i.j)(o.a),a("design:paramtypes",[o.a])],t)}()},"views/contribute.html":function(t,e,n){t.exports='<template>\n  <require from="../resources/elements/point-list"></require>\n  <require from="../resources/elements/contribute-form"></require>\n\n\n  <div class="ui stackable grid">\n    <div class="sixteen wide column">\n      <contribute-form categories.bind="categories"></contribute-form>\n    </div>\n  </div>\n\n\n\n\n</template>\n'},"views/login":function(t,e,n){"use strict";n.r(e),n.d(e,"Login",(function(){return l}));var i=n("aurelia-framework"),o=n("rkiC"),r=function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{c(i.next(t))}catch(t){r(t)}}function s(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((i=i.apply(t,e||[])).next())}))},c=function(t,e){var n,i,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){a.label=r[1];break}if(6===r[0]&&a.label<o[1]){a.label=o[1],o=r;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(r);break}o[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},l=function(){function t(t){this.ds=t,this.email="homer@simpson.com",this.password="secret",this.prompt=""}return t.prototype.login=function(t){return s(this,void 0,void 0,(function(){return c(this,(function(t){switch(t.label){case 0:return console.log("Trying to log in "+this.email),[4,this.ds.login(this.email,this.password)];case 1:return t.sent()||(this.prompt="Oops! Try again..."),[2]}}))}))},t=r([Object(i.j)(o.a),a("design:paramtypes",[o.a])],t)}()},"views/login.html":function(t,e){t.exports='<template>\n  <div class="ui stackable two column grid">\n    <div class="column">\n      <form submit.delegate="login($event)" class="ui stacked segment form">\n        <h3 class="ui header">Log-in</h3>\n        <div class="field">\n          <label>Email</label> <input placeholder="Email" value.bind="email"/>\n        </div>\n        <div class="field">\n          <label>Password</label> <input type="password" value.bind="password"/>\n        </div>\n        <button class="ui blue submit button">Login</button>\n        <h3>${prompt}</h3>\n      </form>\n    </div>\n    <div class="column">\n      <img class="ui medium image" src="/images/homer4.jpeg">\n    </div>\n  </div>\n</template>\n'},"views/logout":function(t,e,n){"use strict";n.r(e),n.d(e,"Logout",(function(){return s}));var i=n("aurelia-framework"),o=n("rkiC"),r=function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.ds=t}return t.prototype.attached=function(){this.ds.logout()},t=r([Object(i.j)(o.a),a("design:paramtypes",[o.a])],t)}()},"views/logout.html":function(t,e){t.exports="<template>\n</template>\n"},"views/map":function(t,e,n){"use strict";n.r(e),n.d(e,"Map",(function(){return h}));var i,o=n("4R65"),r=function(){function t(t){this.overlays={},this.baseLayers={Terrain:o.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:17,attribution:'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'}),Satellite:o.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"})};var e=this.baseLayers.Terrain;t.activeLayer&&(e=this.baseLayers[t.activeLayer]),this.imap=o.map(t.id,{center:[t.location.lat,t.location.long],zoom:t.zoom,minZoom:t.minZoom,layers:[e]}),this.addControl()}return t.prototype.addControl=function(){this.control=o.control.layers(this.baseLayers,this.overlays).addTo(this.imap)},t.prototype.addLayer=function(t,e){this.overlays[t]=e,this.imap.addLayer(e)},t.prototype.addLayerGroup=function(t){this.overlays[t]=o.layerGroup([]),this.imap.addLayer(this.overlays[t])},t.prototype.showLayerControl=function(){this.control=o.control.layers(this.baseLayers,this.overlays).addTo(this.imap)},t.prototype.showZoomControl=function(t){void 0===t&&(t="topleft"),o.control.zoom({position:t}).addTo(this.imap)},t.prototype.moveTo=function(t,e){this.imap.setZoom(t),this.imap.panTo(new o.LatLng(e.lat,e.long))},t.prototype.zoomTo=function(t){this.imap.setView(new o.LatLng(t.lat,t.long),8)},t.prototype.addMarker=function(t,e,n){var i;void 0===e&&(e=""),void 0===n&&(n="default");var r=o.marker([t.lat,t.long]);if(e){var a=o.popup({autoClose:!1,closeOnClick:!1});a.setContent(e),r.bindPopup(a)}this.overlays[n]?i=this.overlays[n]:(i=o.layerGroup([]),this.overlays[n]=i,this.imap.addLayer(i)),r.addTo(i)},t.prototype.addPopup=function(t,e,n){var i;this.overlays[t]?i=this.overlays[t]:(i=o.layerGroup([]),this.overlays[t]=i,this.imap.addLayer(i)),o.popup({closeOnClick:!1,closeButton:!1}).setLatLng({lat:n.lat,long:n.long}).setContent(e).addTo(i)},t.prototype.invalidateSize=function(){this.imap.invalidateSize(),this.imap._onResize()},t}(),a=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t){function e(e){var n=t.call(this,e)||this;return n.markerMap=new Map,n}return a(e,t),e.prototype.populatePoint=function(t,e,n){var i=this;void 0===e&&(e=!0),void 0===n&&(n=null);var r=o.layerGroup([]);t.forEach((function(t){var a=o.marker([t.coordinates.lat,t.coordinates.long]),s=o.popup({autoClose:!1,closeOnClick:!1}),c=e?"<a href='/point/"+t.name+"'>"+t.name+" <small>(click for details}</small></a>":t.name;s.setContent(c),a.bindPopup(s),a.addTo(r),n&&(i.markerMap.set(a,t),a.addTo(r).on("popupopen",(function(t){var e=t.popup._source,o=i.markerMap.get(e);n.onSelect(o.name)})))}))},e}(r),c=n("rkiC"),l=n("aurelia-framework"),u=function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},p=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{c(i.next(t))}catch(t){r(t)}}function s(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((i=i.apply(t,e||[])).next())}))},f=function(t,e){var n,i,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){a.label=r[1];break}if(6===r[0]&&a.label<o[1]){a.label=o[1],o=r;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(r);break}o[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},h=function(){function t(t){this.ds=t,this.mapDescriptor={id:"home-map-id",height:1200,location:{lat:53.2734,long:-7.7783203},zoom:8,minZoom:7,activeLayer:""}}return t.prototype.activate=function(t){return d(this,void 0,void 0,(function(){var t;return f(this,(function(e){switch(e.label){case 0:return t=this,[4,this.ds.getPoints()];case 1:return t.points=e.sent(),[2]}}))}))},t.prototype.renderPoints=function(t){for(var e=0,n=this.ds.points;e<n.length;e++){var i=n[e],o="<a href='/points/"+i._id+"'> "+i.category.costalZone+i.name+"</a>";this.map.addMarker(i.coordinates,o,"Points")}},t.prototype.attached=function(){this.map=new s(this.mapDescriptor),this.points&&this.renderPoints(this.points)},t=u([Object(l.j)(c.a),p("design:paramtypes",[c.a])],t)}()},"views/map.html":function(t,e){t.exports='<template>\n  <div class="ui stacked segment">\n    <div id="${mapDescriptor.id}" class="uk-animation-scale-up" style="height:${mapDescriptor.height}px"></div>\n  </div>\n</template>\n'},"views/navigator":function(t,e,n){},"views/navigator.html":function(t,e,n){t.exports='<template>\n  <require from="../resources/elements/point-lat-long.html"></require>\n  <require from="../resources/elements/point-description.html"></require>\n\n  <div class="uk-text-center" uk-grid>\n    <div class="uk-width-1-3@m uk-animation-slide-left">\n      <div id="${mainMapDescriptor.id}" style="height:${mainMapDescriptor.height}px"></div>\n      <div if.bind="pointSelected">\n        <div class="uk-card uk-card-default uk-card-body">\n          <point-lat-long point.one-way="poi"></point-lat-long>\n        </div>\n      </div>\n    </div>\n    <div class="uk-width-expand@m uk-animation-slide-right">\n      <div id="${islandMapDescriptor.id}" style="height:${islandMapDescriptor.height}px"></div>\n      <div if.bind="pointSelected">\n        <div class="uk-card uk-card-default uk-card-body">\n          <point-description point.one-way="poi"></point-description>\n        </div>\n      </div>\n      <div else>\n        <div class="uk-card uk-card-default uk-card-body">\n          <p> Select Island marker on map to view details...\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n'},"views/point-detail":function(t,e,n){"use strict";n.r(e),n.d(e,"Detail",(function(){return u}));var i=n("aurelia-framework"),o=n("rkiC"),r=n("4ysu"),a=function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},s=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(t,e,n,i){return new(n||(n=Promise))((function(o,r){function a(t){try{c(i.next(t))}catch(t){r(t)}}function s(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((i=i.apply(t,e||[])).next())}))},l=function(t,e){var n,i,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){a.label=r[1];break}if(6===r[0]&&a.label<o[1]){a.label=o[1],o=r;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(r);break}o[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(t){r=[6,t],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},u=function(){function t(t){this.ds=t}return t.prototype.activate=function(t){return c(this,void 0,void 0,(function(){return l(this,(function(e){switch(e.label){case 0:return[4,this.ds.getPointById(t.id)];case 1:return[2,e.sent()]}}))}))},t=a([Object(i.j)(o.a,r.c),s("design:paramtypes",[o.a])],t)}()},"views/point-detail.html":function(t,e){t.exports='<template bindable="point">\n  <div class="ui segment">\n    <div class="description">\n      <p innerhtml.bind="point.description"> ${point.description}</p>\n    </div>\n  </div>\n</template>\n'},"views/point-list":function(t,e,n){"use strict";n.r(e),n.d(e,"List",(function(){return s}));var i=n("aurelia-framework"),o=n("rkiC"),r=function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.ds=t,this.categories=t.categories,this.points=t.points}return t=r([Object(i.j)(o.a),a("design:paramtypes",[o.a])],t)}()},"views/point-list.html":function(t,e,n){t.exports='\n<template>\n    <require from="../resources/elements/point-list"></require>\n\n    <div class="seven wide column">\n      <point-list points.bind="points"></point-list>\n    </div>\n\n\n  </template>\n'},"views/signup":function(t,e,n){"use strict";n.r(e),n.d(e,"Signup",(function(){return s}));var i=n("aurelia-framework"),o=n("rkiC"),r=function(t,e,n,i){var o,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,n,a):o(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.ds=t,this.firstName="Marge",this.lastName="Simpson",this.email="marge@simpson.com",this.password="secret",this.prompt=""}return t.prototype.signup=function(t){console.log("Trying to sign up "+this.email),this.ds.signup(this.firstName,this.lastName,this.email,this.password)||(this.prompt="Oops! Try again...")},t=r([Object(i.j)(o.a),a("design:paramtypes",[o.a])],t)}()},"views/signup.html":function(t,e){t.exports='<template>\n  <div class="ui stackable two column grid">\n    <div class="column">\n      <img class="ui medium image" src="/images/homer2.png">\n    </div>\n    <div class="column">\n      <form submit.delegate="signup($event)" class="ui stacked segment form">\n        <h3 class="ui header">Register</h3>\n        <div class="two fields">\n          <div class="field">\n            <label>First Name</label> <input placeholder="First Name" type="text" value.bind="firstName">\n          </div>\n          <div class="field">\n            <label>Last Name</label> <input placeholder="Last Name" type="text" value.bind="lastName">\n          </div>\n        </div>\n        <div class="field">\n          <label>Email</label> <input placeholder="Email" type="text" value.bind="email">\n        </div>\n        <div class="field">\n          <label>Password</label> <input type="password" value.bind="password">\n        </div>\n        <button class="ui blue submit button">Submit</button>\n      </form>\n      <h3>${prompt}</h3>\n    </div>\n  </div>\n</template>\n'}},[[0,1,7,4,2,6,5,8,3]]]);
//# sourceMappingURL=app~f075b844.b69cf952097db642f99e.bundle.map