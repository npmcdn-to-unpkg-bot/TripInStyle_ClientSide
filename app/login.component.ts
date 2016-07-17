import {Component, OnDestroy, OnInit} from "@angular/core";
import {LoginService} from "./login.service";
import {User} from "./user";
import { Router } from '@angular/router-deprecated';
import { Subscription } from 'rxjs/Subscription';
import {CategoryComponent} from "./category.component";


var please = require('../js/mysectry.js');
var gapi2 = require('js/onloadlogin.js');
var loginApi = require("../js/mytry.js");
declare var gapi;

@Component({
    selector: "login",
    templateUrl: 'html/login.component.html',
    styleUrls: ['css/login.component.css']
})
export class LoginComponent implements OnInit{
    profile: any;
    private result: any;


    constructor(private loginService: LoginService,
                private router: Router) {
    }


    seeProfile() {
        console.log(this.profile);
    }

    signInBtn() {
        please.updateSignIn();
        gapi.client.plus.people.get({
            'userId': 'me'
        }).then(res => this.result = res.result);
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
    }

    loginResponse(res: any) {
        this.result = res;
        //this.getUser(res.emails[0].value,res.image.url);
    }
    
    temp() {
        console.log(this.result);
        //this.getUser(this.result.emails[0].value,this.result.image.url);
        this.getUser(this.result.id,this.result.image.url);
    }

    private getUser(email: string, imageUrl: string) {
        this.loginService.loginUser(email,imageUrl).subscribe(
            res => {
                console.log("Got res:");
                console.log(res);
                this.loginService.userLoggedIn = new User(res.username,res.avatar,res.favorites);
                this.router.navigate(['Categories']).catch(err => console.error(err));
            }
        )
    }

    ngOnInit() {
    }
}