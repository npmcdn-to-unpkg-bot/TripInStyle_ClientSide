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
var StateSearchComponent = (function () {
    function StateSearchComponent(eventsService, router) {
        var _this = this;
        this.eventsService = eventsService;
        this.router = router;
        this.states = [];
        this.allStates = [];
        this.mySearch = "";
        this.eventsService.getStates().then(function (states) {
            _this.allStates = states;
            _this.updateList();
        });
    }
    StateSearchComponent.prototype.chooseState = function (state) {
        this.router.navigate(['State', { stateName: state.name }]);
    };
    StateSearchComponent.prototype.goBack = function () {
        window.history.back();
    };
    StateSearchComponent.prototype.updateList = function () {
        var _this = this;
        console.log(this.mySearch);
        if (this.mySearch == "") {
            this.states = this.allStates;
        }
        else {
            console.log(this.allStates.filter(function (state) {
                return state.name.indexOf(_this.mySearch) == 0;
            }));
            this.states = this.allStates.filter(function (state) {
                return state.name.toLowerCase().indexOf(_this.mySearch.toLowerCase()) == 0;
            });
        }
    };
    StateSearchComponent = __decorate([
        core_1.Component({
            selector: 'state-search',
            templateUrl: 'html/state-search.component.html',
            styleUrls: ['css/state-search.component.css']
        }), 
        __metadata('design:paramtypes', [events_service_1.EventsService, router_deprecated_1.Router])
    ], StateSearchComponent);
    return StateSearchComponent;
}());
exports.StateSearchComponent = StateSearchComponent;
//# sourceMappingURL=state-search.component.js.map