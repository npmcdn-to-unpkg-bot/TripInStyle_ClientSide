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
var Observable_1 = require('rxjs/Observable');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var constants = require('./constants');
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.loginUrl = constants.WEBSERVICE_URL + "validateUser";
        this.updateFavoritesUrl = constants.WEBSERVICE_URL + "updateUserFavorites";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
        this.menuSelected = "home";
    }
    LoginService.prototype.loginUser = function (email, avatarUrl) {
        console.log(email + " " + avatarUrl);
        return this.http.post(this.loginUrl, JSON.stringify({
            "username": email,
            "avatar": avatarUrl
        }), this.options)
            .map(this.returnUser)
            .catch(this.loginError);
    };
    LoginService.prototype.returnUser = function (res) {
        console.debug("[returnUser] Successfully login and got user");
        var body = res.json();
        console.log(body);
        return body;
    };
    LoginService.prototype.loginError = function (error) {
        var errMsg = (error.message) ? error.message : error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error("[loginError] An error occured when identifying user. Reason: " + errMsg);
        console.error(error);
        return Observable_1.Observable.throw(errMsg);
    };
    LoginService.prototype.changeFavorite = function (eventId) {
        return this.http.post(this.updateFavoritesUrl, JSON.stringify({
            "username": this.userLoggedIn.email,
            "event_id": eventId
        }), this.options)
            .map(this.favoriteResponse)
            .catch(this.loginError);
    };
    LoginService.prototype.favoriteResponse = function (res) {
        var body = res.json();
        if ("undefined" !== body.status)
            return true;
        else
            return false;
        //console.log(res);
    };
    LoginService.prototype.changeMenu = function (menuSelected) {
        this.menuSelected = menuSelected;
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map