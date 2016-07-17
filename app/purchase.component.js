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
var login_service_1 = require("./login.service");
var bottommenu_component_1 = require("./bottommenu.component");
var router_deprecated_1 = require('@angular/router-deprecated');
var PurchaseComponent = (function () {
    function PurchaseComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.isInitialized = false;
        this.tickets = [];
    }
    PurchaseComponent.prototype.goBack = function () {
        this.loginService.changeMenu("");
        window.history.back();
    };
    PurchaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        if ("undefined" === typeof this.loginService.userLoggedIn) {
            this.router.navigate(['Login']);
            return;
        }
        else {
            this.loginService.getUserPurchases(this.loginService.userLoggedIn.email)
                .subscribe(function (res) {
                console.log(res);
                _this.tickets = res;
                _this.isInitialized = true;
            });
        }
    };
    PurchaseComponent = __decorate([
        core_1.Component({
            selector: 'my-purchases',
            templateUrl: 'html/purchase.component.html',
            styleUrls: [
                'css/events.component.css',
                'css/purchase.component.css'
            ],
            directives: [
                bottommenu_component_1.BottomMenuComponent
            ]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_deprecated_1.Router])
    ], PurchaseComponent);
    return PurchaseComponent;
}());
exports.PurchaseComponent = PurchaseComponent;
//# sourceMappingURL=purchase.component.js.map