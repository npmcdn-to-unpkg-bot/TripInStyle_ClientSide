import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from './user';
import {Ticket} from "./ticket";
var constants = require('./constants');

@Injectable()
export class LoginService {
    private loginUrl: string = constants.WEBSERVICE_URL + "validateUser";
    private updateFavoritesUrl: string = constants.WEBSERVICE_URL + "updateUserFavorites";
    private getPruchasesUrl: string = constants.WEBSERVICE_URL + "getUserPurchases";
    private headers = new Headers({ 'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers});
    lastMenuSelected: string; "home";
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
            .map(res => this.favoriteResponse(res,eventId))
            .catch(this.loginError);
    }

    private favoriteResponse(res: Response,eventId: string) {
        let body = res.json();
        if("undefined" !== body.status) {
            this.userLoggedIn.changeFavorite(eventId);
            return true;
        }
        else
            return false;
        //console.log(res);
    }
    
    changeMenu(menuSelected: string) {
        if(menuSelected === "") {
            this.menuSelected = this.lastMenuSelected;
            this.lastMenuSelected = "home";
        }
        else {
            this.lastMenuSelected = this.menuSelected;
            this.menuSelected = menuSelected;
        }
    }

    getUserPurchases(email: string) {
        return this.http.post(this.getPruchasesUrl, JSON.stringify({
            "username" : this.userLoggedIn.email
        }), this.options)
            .map(this.purchaseResponse)
            .catch(this.loginError);
    }

    private purchaseResponse(res: Response) {
        let body = res.json();
        let tickets: Ticket[] = [];
        console.log(body);
        for(let ticketList of body.purchases) {
            for(let ticket of ticketList.tickets) {
                tickets.push(new Ticket(ticket.id, ticketList.title, ticketList.city, ticketList.place,
                    ticketList.startDate, ticketList.endDate, ticketList.startTime, ticketList.endTime,
                    ticketList.image, ticket.seat, ticket.row));
            }
        }
        return tickets;
    }
}

