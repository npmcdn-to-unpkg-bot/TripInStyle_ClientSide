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
var core_1 = require("@angular/core");
var login_service_1 = require("./login.service");
var user_1 = require("./user");
var router_deprecated_1 = require('@angular/router-deprecated');
var gapi2 = require('js/onloadlogin.js');
var LoginComponent = (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.googleLoginButtonId = "google-login-button";
        this.userAuthToken = null;
        this.userDisplayName = "empty";
    }
    LoginComponent.prototype.signInBtn = function () {
        var _this = this;
        this.loginService.loginUser("laurachiche1008@gmail.com", "")
            .subscribe(function (res) {
            console.log("Got res:");
            console.log(res);
            _this.loginService.userLoggedIn = new user_1.User(res.username, res.avatar, res.favorites);
            _this.router.navigate(['Categories']);
        });
        /*
        var auth2;
        console.log("1");
        gapi.load('auth2',this.clientLoad());
        /*
        var auth2;
        let componentInstance = this;
        gapi.load('auth2', function() {
            gapi.client.load('plus','v1').then(function() {
                gapi.auth2.init({fetch_basic_profile: false,
                    scope:'https://www.googleapis.com/auth/plus.login'}).then(
                    () => {
                        console.log('init');
                        gapi.auth2.getAuthInstance().then(
                            gapi.client.plus.people.get({'userId':'me'})
                                .then(
                                    res => {
                                        console.log(res);
                                        componentInstance.loginService.loginUser(res.result.emails[0].value,res.result.image.url).subscribe(
                                            res => {
                                                console.log("Got res:");
                                                console.log(res);
                                                componentInstance.loginService.userLoggedIn = new User(res.username,res.avatar,res.favorites);
                                                componentInstance.router.navigate(['Categories']);
                                            }
                                        )
                                    })
                        );
                    });
            });
        });
        */
    };
    LoginComponent.prototype.clientLoad = function () {
        console.log("2");
        gapi.client.load('plus', 'v1').then(this.authInit());
    };
    LoginComponent.prototype.authInit = function () {
        console.log("3");
        gapi.auth2.init({ fetch_basic_profile: false,
            scope: 'https://www.googleapis.com/auth/plus.login' }).then(this.getInstance());
    };
    LoginComponent.prototype.getInstance = function () {
        console.log("4");
        gapi.auth2.getAuthInstance().then(this.getPeople());
    };
    LoginComponent.prototype.getPeople = function () {
        console.log("5");
        gapi.client.plus.people.get({ 'userId': 'me' })
            .then(function (res) {
            this.loginUser(res);
        });
    };
    LoginComponent.prototype.loginUser = function (res) {
        var _this = this;
        console.log("6");
        console.log(res);
        this.loginService.loginUser(res.result.emails[0].value, res.result.image.url).subscribe(function (res) {
            console.log("Got res:");
            console.log(res);
            _this.loginService.userLoggedIn = new user_1.User(res.username, res.avatar, res.favorites);
            _this.router.navigate(['Categories']);
        });
    };
    LoginComponent.prototype.getUser = function (email, imageUrl) {
        var _this = this;
        this.loginService.loginUser(email, imageUrl).subscribe(function (res) {
            console.log("Got res:");
            console.log(res);
            _this.loginService.userLoggedIn = new user_1.User(res.username, res.avatar, res.favorites);
            _this.router.navigate(['Dashboard']);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "sous-app",
            templateUrl: 'html/login.component.html',
            styleUrls: ['css/login.component.css']
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_deprecated_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map