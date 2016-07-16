import {Component} from "@angular/core";

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

    signInBtn() {
        console.log("my click");
        var auth2;
        gapi.load('auth2', function() {
            gapi.client.load('plus','v1').then(function() {
                gapi.auth2.init({fetch_basic_profile: false,
                    scope:'https://www.googleapis.com/auth/plus.login'}).then(
                    function (){
                        console.log('init');
                        gapi.auth2.getAuthInstance().then(
                            gapi.client.plus.people.get({'userId':'me'})
                                .then(
                                    res => {
                                        console.log(res.result.emails[0]);
                                        console.log(res.result.image);
                                        console.log(res.result.name);
                                    })
                        );
                        //auth2.isSignedIn.listen(updateSignIn);
                        //auth2.then(updateSignIn);
                    });
            });
        });
    }

    try() {
        gapi.client.plus.people.get({'userId':'me'})
            .then(
                res => {
                    console.log(res.result.emails[0]);
                    console.log(res.result.image);
                    console.log(res.result.name);
                });
    }

}