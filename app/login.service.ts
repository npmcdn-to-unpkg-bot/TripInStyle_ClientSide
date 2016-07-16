import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from './user';
var constants = require('./constants');

@Injectable()
export class LoginService {
    private loginUrl: string = constants.WEBSERVICE_URL + "validateUser";
    private updateFavoritesUrl: string = constants.WEBSERVICE_URL + "updateUserFavorites";
    private headers = new Headers({ 'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers});
    menuSelected: string = "home";
    userLoggedIn: User;
    
    constructor(private http: Http) {}
    
    loginUser(email: string, avatarUrl: string) {
        console.log(email+" " + avatarUrl);
        return this.http.post(this.loginUrl, JSON.stringify({
            "username" : email,
            "avatar": avatarUrl
        }), this.options)
            .map(this.returnUser)
            .catch(this.loginError);
    }

    private returnUser(res: Response) {
        console.debug("[returnUser] Successfully login and got user");
        let body = res.json();
        console.log(body);
        return body;
    }

    private loginError(error: any) {
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error("[loginError] An error occured when identifying user. Reason: " + errMsg);
        console.error(error);
        return Observable.throw(errMsg);
    }

    changeFavorite(eventId: string) {
        return this.http.post(this.updateFavoritesUrl, JSON.stringify({
            "username" : this.userLoggedIn.email,
            "event_id": eventId
        }), this.options)
            .map(this.favoriteResponse)
            .catch(this.loginError);
    }

    private favoriteResponse(res: Response) {
        let body = res.json();
        if("undefined" !== body.status)
            return true;
        else
            return false;
        //console.log(res);
    }
    
    changeMenu(menuSelected: string) {
        this.menuSelected = menuSelected;
    }
}

