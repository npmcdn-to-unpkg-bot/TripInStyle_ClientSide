import {Component} from "@angular/core";
import {LoginService} from "./login.service";
import {User} from "./user";
import { Router } from '@angular/router-deprecated';

var gapi2 = require('js/onloadlogin.js');
declare var gapi;

@Component({
    selector: "sous-app",
    templateUrl: 'html/login.component.html',
    styleUrls: ['css/login.component.css']
})
export class LoginComponent {
    googleLoginButtonId = "google-login-button";
    userAuthToken = null;
    userDisplayName = "empty";

    constructor(private loginService: LoginService,
                private router: Router) {}

    signInBtn() {
        
        this.loginService.loginUser("laurachiche1008@gmail.com","")
            .subscribe(
                res => {
                    console.log("Got res:");
                    console.log(res);
                    this.loginService.userLoggedIn = new User(res.username,res.avatar,res.favorites);
                    this.router.navigate(['Categories']);
                }
            );
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
    }

    private clientLoad() {
        console.log("2");
        gapi.client.load('plus','v1').then(this.authInit())
    }

    private authInit() {
        console.log("3");
        gapi.auth2.init(
            {fetch_basic_profile: false,
            scope:'https://www.googleapis.com/auth/plus.login'}
        ).then(this.getInstance());
    }

    private getInstance() {
        console.log("4");
        gapi.auth2.getAuthInstance().then(this.getPeople());
    }

    private getPeople() {
        console.log("5");
        gapi.client.plus.people.get({'userId':'me'})
            .then(function(res) {
                this.loginUser(res);
            })

    }

    private loginUser(res: any) {
        console.log("6");
        console.log(res);
        this.loginService.loginUser(res.result.emails[0].value,res.result.image.url).subscribe(
            res => {
                console.log("Got res:");
                console.log(res);
                this.loginService.userLoggedIn = new User(res.username,res.avatar,res.favorites);
                this.router.navigate(['Categories']);
            }
        )
    }

    private getUser(email: string, imageUrl: string) {
        this.loginService.loginUser(email,imageUrl).subscribe(
            res => {
                console.log("Got res:");
                console.log(res);
                this.loginService.userLoggedIn = new User(res.username,res.avatar,res.favorites);
                this.router.navigate(['Dashboard']);
            }
        )
    }
}