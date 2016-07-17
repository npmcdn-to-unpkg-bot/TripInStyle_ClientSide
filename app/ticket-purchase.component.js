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
var login_service_1 = require("./login.service");
var events_service_1 = require("./events.service");
var constants = require('./constants');
var PurchaseTicketsComponent = (function () {
    function PurchaseTicketsComponent(eventsService, router, loginService, params) {
        this.eventsService = eventsService;
        this.router = router;
        this.loginService = loginService;
        this.params = params;
        this.isPurchaseSuccess = false;
        this.responsePopup = false;
    }
    PurchaseTicketsComponent.prototype.goToPurchases = function () {
        if (this.isPurchaseSuccess) {
            this.loginService.lastMenuSelected = "home";
            this.loginService.menuSelected = "ticket";
            this.router.navigate(['Purchases']);
        }
        this.responsePopup = false;
    };
    PurchaseTicketsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.eventsService.getEventByID(this.params.get('eventId'))
            .then(function (event) {
            console.log(event);
            _this.selectedEvent = event;
            _this.isInitialized = true;
        });
    };
    PurchaseTicketsComponent.prototype.goBack = function () {
        this.loginService.changeMenu("");
        window.history.back();
    };
    PurchaseTicketsComponent.prototype.formCompleted = function () {
        var _this = this;
        console.log("Total tickets: " + this.ticketsAmount);
        this.eventsService.addPurchase(this.loginService.userLoggedIn.email, this.params.get('eventId'), this.ticketsAmount)
            .then(function (result) {
            _this.responsePopup = true;
            if (result.succeed) {
                _this.isPurchaseSuccess = true;
            }
            _this.msg = result.msg;
        });
    };
    PurchaseTicketsComponent = __decorate([
        core_1.Component({
            selector: 'app-ticket-purchase',
            templateUrl: 'html/ticket-purchase.component.html',
            styleUrls: [
                'css/events.component.css',
                'css/ticket-purchase.component.css'
            ]
        }), 
        __metadata('design:paramtypes', [events_service_1.EventsService, router_deprecated_1.Router, login_service_1.LoginService, router_deprecated_1.RouteParams])
    ], PurchaseTicketsComponent);
    return PurchaseTicketsComponent;
}());
exports.PurchaseTicketsComponent = PurchaseTicketsComponent;
//# sourceMappingURL=ticket-purchase.component.js.map