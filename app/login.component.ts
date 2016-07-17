import {Component, OnDestroy, NgZone} from "@angular/core";
import {LoginService} from "./login.service";
import {User} from "./user";
import { Router } from '@angular/router-deprecated';

var gapi2 = require('js/onloadlogin.js');
var loginApi = require("../js/mytry.js");

@Component({
    selector: "sous-app",
    templateUrl: 'html/login.component.html',
    styleUrls: ['css/login.component.css']
})
export class LoginComponent {
    googleLoginButtonId = "google-login-button";
    userAuthToken = null;
    userDisplayName = "empty";
    profile: any;


    constructor(private loginService: LoginService,
                private router: Router, private zone: NgZone) {}

    seeProfile() {
        console.log(this.profile);
    }

    signInBtn() {
//        this.zone.runGuarded(loginApi(this.loginRespone, this));
        console.log(this.zone);
        loginApi(this.loginRespone.bind(this));
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
    }

    loginRespone(res: any) {
        console.log(res);
        this.getUser(res.emails[0].value,res.image.url);
    }

    private getUser(email: string, imageUrl: string) {
        this.loginService.loginUser(email,imageUrl).subscribe(
            res => {
                console.log("Got res:");
                console.log(res);
                this.loginService.userLoggedIn = new User(res.username,res.avatar,res.favorites);
                this.router.navigate(['Categories']);
                //this.navigateToCategories(this));
            }
        )
    }
    
    private navigateToCategories(instance: any) {
        instance.router.navigateByUrl('categories');
    }
}