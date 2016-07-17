import { Component,Input, OnInit } from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';
import {LoginService} from "./login.service";
import {EventsService} from "./events.service";
import {Event} from "./event";

var constants = require('./constants');

@Component({
    selector: 'app-ticket-purchase',
    templateUrl: 'html/ticket-purchase.component.html',
    styleUrls: [
        'css/events.component.css',
        'css/ticket-purchase.component.css'
    ]
})

export class PurchaseTicketsComponent implements OnInit {
    private selectedEvent : Event;
    private isInitialized : boolean;
    private ticketsAmount : number;
    private isPurchaseSuccess: boolean = false;
    
    constructor(private eventsService: EventsService,
                private router: Router,
                private loginService: LoginService,
                private params: RouteParams) {
    }

    private goToPurchases() {
        this.loginService.lastMenuSelected="home";
        this.loginService.menuSelected="ticket";
        this.router.navigate(['Purchases']);
    }

    ngOnInit() {
            this.eventsService.getEventByID(this.params.get('eventId'))
                .then(event => {
                    console.log(event);
                        this.selectedEvent = event;
                        this.isInitialized = true;
                });
    }

    formCompleted()
    {
        //TODO - HANDLE ERROR RESPONSE - SHOW MESSAGE TO USER
        console.log("Total tickets: "+this.ticketsAmount);
        this.eventsService.addPurchase(this.loginService.userLoggedIn.email,this.params.get('eventId'),this.ticketsAmount)
            .then(result => {
                if(result)
                {
                    console.log("Success");
                    this.isPurchaseSuccess = true;
                }
                else
                {
                    console.log("Error");
                }
            });
    }


}

