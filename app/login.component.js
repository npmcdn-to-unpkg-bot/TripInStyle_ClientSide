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
var please = require('../js/mysectry.js');
var gapi2 = require('js/onloadlogin.js');
var loginApi = require("../js/mytry.js");
var LoginComponent = (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    LoginComponent.prototype.seeProfile = function () {
        console.log(this.profile);
    };
    LoginComponent.prototype.signInBtn = function () {
        var _this = this;
        please.updateSignIn();
        gapi.client.plus.people.get({
            'userId': 'me'
        }).then(function (res) { return _this.result = res.result; });
        /*
        console.log(this.profile);
        gapi.client.plus.people.get({
            'userId': 'me'
        }).then(res => this.profile = res);





        //console.log(please.myProfile);
        //loginApi(this.loginResponse.bind(this));
        //this.zone.on
        //this.zone.runOutsideAngular(loginApi(this.loginRespone, this));
//        loginApi(this.loginRespone, this);
        /*
        this.loginService.loginUser("laurachiche1008@gmail.com","")
            .subscribe(
                res => {
                    console.log("Got res:");
                    console.log(res);
                    this.loginService.userLoggedIn = new User(res.username,res.avatar,res.favorites);
                    this.router.navigate(['Categories']);
                }
            );
            */
        var auth2;
        /*
        console.log("1");
        gapi.load('auth2',this.clientLoad());
        var auth2;
        let componentInstance = this;*/
        /*
        gapi.load('auth2', function() {
            gapi.client.load('plus','v1').then(function() {
                gapi.signin2.render('signin-button', {
                    scope: 'https://www.googleapis.com/auth/plus.login',
                    fetch_basic_profile: false });
                gapi.auth2.init({fetch_basic_profile: false,
                    scope:'https://www.googleapis.com/auth/plus.login'}).then(
                    function (){
                        console.log('init');
                        auth2 = gapi.auth2.getAuthInstance();
                        auth2.isSignedIn.listen(updateSignIn);
                        auth2.then(updateSignIn);
                    });
            });
        });*/
    };
    LoginComponent.prototype.loginResponse = function (res) {
        this.result = res;
        //this.getUser(res.emails[0].value,res.image.url);
    };
    LoginComponent.prototype.temp = function () {
        console.log(this.result);
        //this.getUser(this.result.emails[0].value,this.result.image.url);
        this.getUser(this.result.id, this.result.image.url);
    };
    LoginComponent.prototype.getUser = function (email, imageUrl) {
        var _this = this;
        this.loginService.loginUser(email, imageUrl).subscribe(function (res) {
            console.log("Got res:");
            console.log(res);
            _this.loginService.userLoggedIn = new user_1.User(res.username, res.avatar, res.favorites);
            _this.router.navigate(['Categories']).catch(function (err) { return console.error(err); });
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            templateUrl: 'html/login.component.html',
            styleUrls: ['css/login.component.css']
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_deprecated_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map