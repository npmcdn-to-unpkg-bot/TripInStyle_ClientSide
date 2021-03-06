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
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var events_service_1 = require("./events.service");
var bottommenu_component_1 = require("./bottommenu.component");
var login_service_1 = require("./login.service");
var StateComponent = (function () {
    function StateComponent(eventsService, router, routeParams, loginService) {
        this.eventsService = eventsService;
        this.router = router;
        this.routeParams = routeParams;
        this.loginService = loginService;
        this.isInitialized = false;
        this.eventsList = [];
        this.userCategoriesMenu = [];
        this.selectedCategories = [];
        this.filterMenu = false;
        this.limit = 7;
        this.eventDetails = false;
    }
    StateComponent.prototype.changeFilterMenuState = function () {
        this.filterMenu = !this.filterMenu;
        if (!this.filterMenu) {
            this.isInitialized = false;
            if (!(this.userCategoriesMenu.filter(function (cat) { return cat.selected == true; })
                === this.eventsService.categoryMenu
                    .filter(function (cat) { return cat.selected == true; }))) {
                this.limit = 7;
                this.getEvents();
            }
        }
    };
    StateComponent.prototype.changeFavoriteStatus = function (event) {
        var _this = this;
        this.loginService.changeFavorite(event._id).
            subscribe(function (res) {
            if (res)
                _this.eventsList.find(function (ev) { return event === ev; }).changeFavorite();
        });
        //this.loginService.userLoggedIn.changeFavorite(event._id);
    };
    StateComponent.prototype.seeEventDetails = function (event) {
        this.eventDetails = true;
        this.chosenEvent = event;
        scroll(0, 0);
    };
    StateComponent.prototype.addStateFilter = function () {
        this.eventsService.categoryMenu = this.userCategoriesMenu;
        this.router.navigate(['StateSearch']);
    };
    StateComponent.prototype.exitFilterMenu = function () {
        console.log("exit filterMenu");
        if (this.filterMenu) {
            this.changeFilterMenuState();
        }
    };
    StateComponent.prototype.goBack = function () {
        this.eventDetails = false;
    };
    StateComponent.prototype.changeCategories = function (category) {
        var isSelected = this.userCategoriesMenu.find(function (cat) { return cat === category; }).selected;
        this.userCategoriesMenu.find(function (cat) { return cat === category; }).selected = !isSelected;
    };
    StateComponent.prototype.getEvents = function () {
        var _this = this;
        this.stateName = this.routeParams.get('stateName');
        this.selectedCategories = this.userCategoriesMenu.filter(function (cat) { return cat.selected == true; });
        this.eventsService.getEventsAtState(this.stateName, this.selectedCategories)
            .then(function (events) {
            _this.eventsList = events;
            _this.loginService.userLoggedIn.favorites.forEach(function (eventId) {
                if (_this.eventsList.findIndex(function (event) { return event._id == eventId; }) > -1)
                    _this.eventsList.find(function (event) { return event._id == eventId; }).isFavorite = true;
            });
            _this.isInitialized = true;
        });
    };
    StateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedCategories = [];
        this.eventsList = [];
        if (this.eventsService.categoryMenu.length == 0) {
            this.eventsService.getCategories().then(function (cat) {
                _this.userCategoriesMenu = cat;
                _this.getEvents();
            });
        }
        else {
            this.userCategoriesMenu = this.eventsService.categoryMenu;
            this.selectedCategories = this.userCategoriesMenu.filter(function (cat) { return cat.selected == true; });
            this.getEvents();
        }
    };
    StateComponent.prototype.seeMore = function () {
        this.limit += 7;
    };
    StateComponent.prototype.homeSearch = function () {
        this.router.navigate(['Events']);
    };
    StateComponent = __decorate([
        core_1.Component({
            selector: 'state',
            templateUrl: 'html/state.component.html',
            styleUrls: ['css/events.component.css'],
            directives: [
                bottommenu_component_1.BottomMenuComponent
            ]
        }), 
        __metadata('design:paramtypes', [events_service_1.EventsService, router_deprecated_1.Router, router_deprecated_1.RouteParams, login_service_1.LoginService])
    ], StateComponent);
    return StateComponent;
}());
exports.StateComponent = StateComponent;
//# sourceMappingURL=state.component.js.map