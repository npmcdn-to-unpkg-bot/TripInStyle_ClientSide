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
var gapi2 = require('js/onloadlogin.js');
var LoginComponent = (function () {
    function LoginComponent() {
        this.googleLoginButtonId = "google-login-button";
        this.userAuthToken = null;
        this.userDisplayName = "empty";
    }
    LoginComponent.prototype.signInBtn = function () {
        console.log("my click");
        var auth2;
        gapi.load('auth2', function () {
            gapi.client.load('plus', 'v1').then(function () {
                gapi.auth2.init({ fetch_basic_profile: false,
                    scope: 'https://www.googleapis.com/auth/plus.login' }).then(function () {
                    console.log('init');
                    gapi.auth2.getAuthInstance().then(gapi.client.plus.people.get({ 'userId': 'me' })
                        .then(function (res) {
                        console.log(res.result.emails[0]);
                        console.log(res.result.image);
                        console.log(res.result.name);
                    }));
                    //auth2.isSignedIn.listen(updateSignIn);
                    //auth2.then(updateSignIn);
                });
            });
        });
    };
    LoginComponent.prototype.try = function () {
        gapi.client.plus.people.get({ 'userId': 'me' })
            .then(function (res) {
            console.log(res.result.emails[0]);
            console.log(res.result.image);
            console.log(res.result.name);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "sous-app",
            templateUrl: 'html/login.component.html',
            styleUrls: ['css/login.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map