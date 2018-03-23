webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var new_component_1 = __webpack_require__("./src/app/new/new.component.ts");
var details_component_1 = __webpack_require__("./src/app/details/details.component.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'new', component: new_component_1.NewComponent },
    { path: 'details/:id', component: details_component_1.DetailsComponent },
    { path: 'edit/:id', component: edit_component_1.EditComponent },
    { path: '', pathMatch: 'full', redirectTo: '/' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n  <h1>Pet Shelter</h1>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.title = "app";
    }
    AppComponent.prototype.ngOnInit = function () {
        this._route.params.subscribe(function (params) { return console.log(params['id']); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var new_component_1 = __webpack_require__("./src/app/new/new.component.ts");
var details_component_1 = __webpack_require__("./src/app/details/details.component.ts");
var edit_component_1 = __webpack_require__("./src/app/edit/edit.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                new_component_1.NewComponent,
                details_component_1.DetailsComponent,
                edit_component_1.EditComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/details/details.component.css":
/***/ (function(module, exports) {

module.exports = "a { \r\n    margin-left: 245px;\r\n    color: blue;\r\n}\r\n\r\n.like { \r\n    background-color: lightskyblue;\r\n    color:white;\r\n    padding: 10px;\r\n    font-size: 15px;\r\n    border-radius: 7px;\r\n}\r\n\r\n.adopt { \r\n    background-color:#566d77;\r\n    color:white;\r\n    padding: 10px;\r\n    font-size: 15px;\r\n    border-radius: 7px;\r\n}\r\n\r\nb { \r\n    font-size: 18px;\r\n}"

/***/ }),

/***/ "./src/app/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/']\">Home</a>\n\n<div *ngIf='petDeets'>\n    <h3>Details about {{petDeets.name}}</h3>\n    <b>Pet type:</b> {{ petDeets.type }}<br><br>\n    <b>Description:</b>{{ petDeets.description }}\n  \n <br><br> <b>Skills:</b>{{ petDeets.skills[0] }}\n    <p>{{ petDeets.skills[1] }}</p>\n    <p>{{ petDeets.skills[2] }}</p>\n\n    <b>Likes:</b>{{ petDeets.likes }}\n  \n<br><br><br><button class= \"like\" *ngIf=\"!liked\" (click)=\"likePetFromService()\">Like this pet</button>\n<button class= \"adopt\"(click)=\"adoptPetFromService()\">Adopt this pet!</button>"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        // this.likedPet = false;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.getPetFromService(params['id']);
        });
    };
    DetailsComponent.prototype.getPetFromService = function (id) {
        var _this = this;
        var observable = this._httpService.getPet(id);
        observable.subscribe(function (data) {
            if (data['errorMsg']) {
                _this._router.navigate(["/"]);
            }
            _this.petDeets = data['pet'];
        });
    };
    DetailsComponent.prototype.likePetFromService = function () {
        var _this = this;
        var observable = this._httpService.petLiked(this.petDeets);
        observable.subscribe(function (data) {
            // this.likedPet = true;
            _this.getPetFromService(data['pet']);
        });
    };
    DetailsComponent.prototype.adoptPetFromService = function () {
        var _this = this;
        var observable = this._httpService.adoptPet(this.petDeets);
        observable.subscribe(function (data) {
            _this.goHome();
        });
    };
    DetailsComponent.prototype.goHome = function () {
        this._router.navigate(["/"]);
    };
    DetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-details',
            template: __webpack_require__("./src/app/details/details.component.html"),
            styles: [__webpack_require__("./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], DetailsComponent);
    return DetailsComponent;
}());
exports.DetailsComponent = DetailsComponent;


/***/ }),

/***/ "./src/app/edit/edit.component.css":
/***/ (function(module, exports) {

module.exports = ".submit { \r\n    color:white; \r\n    background-color: lightblue;\r\n    padding:10px; \r\n    border-radius: 7px;\r\n    font-size: 15px;\r\n    margin-left: 95px;\r\n}\r\n\r\n.button { \r\n    color: white; \r\n    background-color: lightblue; \r\n    padding: 10px;\r\n    font-size: 15px;\r\n    border-radius: 7px;\r\n    margin-left: 15px;\r\n}\r\n\r\nli { \r\n    list-style-type: none;\r\n}\r\n\r\ninput { \r\n    border-radius: 3px;\r\n    border: 1px solid silver;\r\n}\r\n"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Edit this pet</h3>\n<form (submit)=\"editPetFromService()\">\n    <label for=\"editPet.name\">Pet name: \n        <input type=\"text\" name=\"editPet.name\" [(ngModel)]=\"editPet.name\" required minlength=\"3\">\n    </label><br><br>\n    <label for=\"editPet.type\">Pet type: \n        <input type=\"text\" name=\"editPet.type\" [(ngModel)]=\"editPet.type\" required minlength=\"3\">\n    </label><br><br>\n    <label for=\"editPet.description\">Description: \n        <input type=\"description\" name=\"editPet.description\" [(ngModel)]=\"editPet.description\" required minlength=\"3\">\n    </label><br><br>\n\n    <li>Skills (optional):</li> \n        <ul>\n                Skill 1:<input type=\"skills[0]\" name=\"editPet.skills[0]\"  [(ngModel)]=\"editPet.skills[0]\" #skills[0]=\"ngModel\"><br><br>\n                Skill 2:<input type=\"skills[1]\" name=\"editPet.skills[1]\" [(ngModel)]=\"editPet.skills[1]\" #skills[1]=\"ngModel\"><br><br>\n                Skill 3:<input type=\"skills[2]\" name=\"editPet.skills[2]\" [(ngModel)]=\"editPet.skills[2]\" #skills[2]=\"ngModel\"><br><br>    \n        </ul>\n\n    <input class = \"submit\" type=\"submit\" value=\"Edit pet\">\n    <button class = \"button\" [routerLink]=\"['/details']\">Cancel</button>\n</form>\n"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.getPetFromService(params['id']);
        });
    };
    EditComponent.prototype.editPetFromService = function () {
        var _this = this;
        var observable = this._httpService.edit(this.editPet);
        observable.subscribe(function (data) {
            console.log('updated', data);
            if (data['err']) {
                _this.error = 'Error editing pet!';
            }
            else {
                _this._router.navigate(["/details/" + data['pet']]);
            }
        });
    };
    EditComponent.prototype.getPetFromService = function (id) {
        var _this = this;
        var observable = this._httpService.getPet(id);
        observable.subscribe(function (data) {
            console.log(data);
            if (data['error']) {
                _this.goHome();
            }
            _this.editPet = data['pet'];
        });
    };
    EditComponent.prototype.goHome = function () {
        this._router.navigate(["/"]);
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".home { \r\n border: 2px solid black;\r\n}\r\na { \r\n    color: blue;\r\n}\r\ntr { \r\n border: 2px solid black; \r\n background-color: lightgray;\r\n}\r\ntd { \r\n border: 2px solid black;\r\n color: black;\r\n}\r\nth { \r\n    color:white;\r\n    background-color: #d3d3d3;\r\n    /* padding: 15px; */\r\n}\r\n.details { \r\n    color: white; \r\n    background-color: #63798a;\r\n    border-radius: 5px;\r\n}\r\n.edit { \r\n    color: white; \r\n    background-color: #898e8e;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>These pets are looking for a home!</h3>\n\n<a [routerLink]=\"['/new']\">Add a pet to the shelter</a><br><br>\n\n<div>\n    <table class= \"home\">\n        <thead>\n            <th>Name</th>\n            <th>Type</th>\n            <th>Actions</th>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let x of allPets\">\n                <td>{{x.name}}</td>\n                <td>{{x.type}}</td>\n                <td><button class= \"details\" [routerLink]=\"['/details', x._id]\">Details</button></td>\n                <td><button class= \"edit\" [routerLink]=\"['/edit', x._id]\">Edit</button></td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService) {
        this._httpService = _httpService;
        this.allPets = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getPetsFromService();
    };
    HomeComponent.prototype.getPetsFromService = function () {
        var _this = this;
        var observable = this._httpService.getPets();
        observable.subscribe(function (data) {
            console.log('pets', data);
            _this.allPets = data['pets'];
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.create = function (newPet) {
        console.log('Creating a pet!');
        return this._http.post('/addPet', newPet);
    };
    HttpService.prototype.getPets = function () {
        console.log('Retreiving the pets!');
        return this._http.get('/allPets');
    };
    HttpService.prototype.getPet = function (id) {
        console.log('getting a single pet!', id);
        return this._http.post('/onePet', { _id: id });
    };
    HttpService.prototype.petLiked = function (pet) {
        console.log('someone is liking this pet!', pet);
        return this._http.post('/petLiked', pet);
    };
    HttpService.prototype.edit = function (editPet) {
        console.log('Editing pet deets!');
        return this._http.post('/updatePet', editPet);
    };
    HttpService.prototype.adoptPet = function (pet) {
        console.log('This pet has been adopted!');
        return this._http.post('/deletePet', pet);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/app/new/new.component.css":
/***/ (function(module, exports) {

module.exports = ".button { \r\n    color: white;\r\n    background-color: lightskyblue;\r\n    border-radius: 7px;\r\n    padding: 10px;\r\n    font-size: 15px;\r\n    margin-left: 25px;\r\n}\r\n\r\n.submit { \r\n    color:white; \r\n    background-color: lightskyblue;\r\n    border-radius: 7px;\r\n    padding: 10px;\r\n    font-size: 15px;\r\n    margin-left: 120px;\r\n    \r\n}\r\n\r\nli { \r\n    list-style-type: none;\r\n}\r\n\r\ninput { \r\n    border-radius: 3px;\r\n    border: 1px solid silver;\r\n}\r\n\r\n/* body { \r\n    border: 1px solid black;\r\n} */"

/***/ }),

/***/ "./src/app/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\n<h4>Know of a pet needing a home?</h4>\n<form name=\"myForm\" (submit)=\"onAdd()\">\n    <label for=\"newPet.name\">Pet name: <br>\n        <input type=\"text\" name=\"newPet.name\" [(ngModel)]=\"newPet.name\" required minlength=\"3\" #name= \"ngModel\">\n        <p style=\"color:purple\" *ngIf=\"name.errors && name.errors.minlength\">Name must be at least 3 characters!</p>\n    </label><br><br>\n    <label for=\"newPet.type\">Pet type: <br>\n        <input type=\"text\" name=\"newPet.type\" [(ngModel)]=\"newPet.type\" required minlength=\"3\" #type= \"ngModel\">\n        <p style=\"color: purple\" *ngIf=\"type.errors && type.errors.minlength\">Type must be at least 3 characters!</p>\n    </label><br><br>\n    <label for=\"newPet.description\">Description: <br> \n        <input type=\"description\" name=\"newPet.description\" [(ngModel)]=\"newPet.description\" required minlength=\"3\" #description = \"ngModel\">\n        <p style=\"color:purple\" *ngIf=\"description.errors && description.errors.minlength\">Description must be at least 3 characters</p>\n    </label><br>\n\n   <li>Skills:</li>\n        <ul>\n                Skill 1: <input type=\"skills[0]\" name=\"newPet.skills[0]\"  [(ngModel)]=\"newPet.skills[0]\" #skills[0]=\"ngModel\"><br><br>\n                Skill 2: <input type=\"skills[1]\" name=\"newPet.skills[1]\" [(ngModel)]=\"newPet.skills[1]\" #skills[1]=\"ngModel\"><br><br>\n                Skill 3: <input type=\"skills[2]\" name=\"newPet.skills[2]\" [(ngModel)]=\"newPet.skills[2]\" #skills[2]=\"ngModel\"><br><br>\n        </ul>\n   \n    <input class =\"submit\" type=\"submit\" value=\"Add pet\">\n    <button class= \"button\" [routerLink]=\"['/']\">Cancel</button>\n  </form>\n\n  \n\n  </body>\n\n{{error}}\n   \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    "

/***/ }),

/***/ "./src/app/new/new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var NewComponent = /** @class */ (function () {
    function NewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.newPet = { name: '', type: '', description: '', skills: ['', '', ''], };
    }
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent.prototype.onAdd = function () {
        var _this = this;
        console.log('Waiting to add pet!');
        var observable = this._httpService.create(this.newPet);
        observable.subscribe(function (data) {
            console.log('added', data);
            if (data['error']) {
                console.log("ERROR!!!");
                _this.error = 'This pet already exists!!';
            }
            else {
                _this.goHome();
            }
        });
    };
    NewComponent.prototype.goHome = function () {
        this._router.navigate(['/']);
    };
    NewComponent = __decorate([
        core_1.Component({
            selector: 'app-new',
            template: __webpack_require__("./src/app/new/new.component.html"),
            styles: [__webpack_require__("./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], NewComponent);
    return NewComponent;
}());
exports.NewComponent = NewComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map