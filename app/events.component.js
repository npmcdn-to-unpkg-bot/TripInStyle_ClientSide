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
var login_service_1 = require("./login.service");
var bottommenu_component_1 = require("./bottommenu.component");
var EventsComponent = (function () {
    function EventsComponent(eventsService, loginService, router) {
        this.eventsService = eventsService;
        this.loginService = loginService;
        this.router = router;
        this.events = [];
        this.isInitialized = false;
        this.userCategoriesMenu = [];
        this.selectedCategories = [];
        this.filterMenu = false;
        this.limit = 7;
        this.eventDetails = false;
        console.log(this.loginService.userLoggedIn);
    }
    EventsComponent.prototype.changeFilterMenuState = function () {
        console.log("Change filter menu state");
        this.filterMenu = !this.filterMenu;
        if (!this.filterMenu) {
            if (!(this.userCategoriesMenu.filter(function (cat) { return cat.selected == true; })
                === this.eventsService.categoryMenu
                    .filter(function (cat) { return cat.selected == true; }))) {
                this.limit = 7;
                this.getEvents();
            }
        }
    };
    EventsComponent.prototype.changeFavoriteStatus = function (event) {
        var _this = this;
        this.loginService.changeFavorite(event._id).
            subscribe(function (res) {
            if (res)
                _this.events.find(function (ev) { return event === ev; }).changeFavorite();
        });
        //this.loginService.userLoggedIn.changeFavorite(event._id);
    };
    EventsComponent.prototype.seeEventDetails = function (event) {
        this.eventDetails = true;
        this.chosenEvent = event;
        scroll(0, 0);
    };
    EventsComponent.prototype.changeCategories = function (category) {
        var isSelected = this.userCategoriesMenu.find(function (cat) { return cat === category; }).selected;
        this.userCategoriesMenu.find(function (cat) { return cat === category; }).selected = !isSelected;
    };
    EventsComponent.prototype.exitFilterMenu = function () {
        if (this.filterMenu) {
            this.changeFilterMenuState();
        }
    };
    EventsComponent.prototype.getEvents = function () {
        var _this = this;
        this.selectedCategories = this.userCategoriesMenu
            .filter(function (cat) { return cat.selected == true; });
        console.log("Selected categories");
        console.log(this.selectedCategories);
        if (this.selectedCategories.length > 0) {
            this.eventsService.getEventsOfCategories(this.selectedCategories)
                .then(function (events) {
                _this.events = events;
                _this.loginService.userLoggedIn.favorites.forEach(function (eventId) {
                    if (_this.events.findIndex(function (event) { return event._id == eventId; }) > -1)
                        _this.events.find(function (event) { return event._id == eventId; }).isFavorite = true;
                });
                _this.isInitialized = true;
            });
        }
        else {
            this.events = [];
        }
    };
    EventsComponent.prototype.addStateFilter = function () {
        this.eventsService.categoryMenu = this.userCategoriesMenu;
        this.router.navigate(['StateSearch']);
    };
    EventsComponent.prototype.purchase = function (eventId) {
        this.loginService.changeMenu("purchase");
        this.router.navigateByUrl('ticket-purchase/' + eventId);
    };
    EventsComponent.prototype.goBack = function () {
        this.eventDetails = false;
        this.chosenEvent = null;
    };
    EventsComponent.prototype.seeMore = function () {
        this.limit += 7;
    };
    EventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if ("undefined" === typeof this.loginService.userLoggedIn)
            this.router.navigate(['Login']);
        else {
            this.events = [];
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
        }
    };
    EventsComponent = __decorate([
        core_1.Component({
            selector: 'events',
            templateUrl: 'html/events.component.html',
            styleUrls: ['css/events.component.css'],
            directives: [
                bottommenu_component_1.BottomMenuComponent
            ]
        }), 
        __metadata('design:paramtypes', [events_service_1.EventsService, login_service_1.LoginService, router_deprecated_1.Router])
    ], EventsComponent);
    return EventsComponent;
}());
exports.EventsComponent = EventsComponent;
//# sourceMappingURL=events.component.js.map